module V1
  class Users < Grape::API
    namespace "users"

    desc "List users"
    get do
      { users: User.all }
    end

    route_param :id do
      desc "Get a user by id"
      get do
        { user: User.find(params.id) }
      end
    end

  end
end
