module V1
  class Dogs < Grape::API
    namespace "dogs"

    params do
      optional :page, type: Integer
    end
    get do
      { dogs: paginate(Dog.all) }
    end

  end
end