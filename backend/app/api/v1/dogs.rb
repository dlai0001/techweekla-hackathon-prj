module V1
  class Dogs < Grape::API
    namespace "dogs"
    before(&:authenticate!)

    desc "List dogs"
    params do
      optional :page, type: Integer
    end
    get do
      { dogs: paginate(Dog.all) }
    end

    route_param ":id" do
      desc "like a dog"
      params do
        requires :like, type: Boolean
      end
      post do
        dog = Dog.find(params.id)
        current_user.like_dog(dog) if params.like
        { dog: dog }
      end
    end

  end
end
