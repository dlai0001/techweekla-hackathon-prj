module V1
  class Shelters < Grape::API
    namespace "shelters"
    before(&:authenticate!)

    desc "List shelters with channels for user"
    params do
      requires :user_id, type: Integer
    end
    get do
      { shelters: Shelter.all }
    end

    route_param :id do
      desc "Shelter by id"
      get do
        { shelter: Shelter.find(params.id) }
      end
    end
  end
end
