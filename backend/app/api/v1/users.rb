module V1
  class Users < Grape::API
    namespace "users"

    route_param :id do
      desc "Get a user by id"
      get do
        { user: User.find(params.id) }
      end
    end

  end
end
