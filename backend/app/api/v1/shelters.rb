module V1
  class Shelters < Grape::API
    namespace "dogs"
    before(&:authenticate!)

    desc "List shelters with channels for user"
    params do
      requires :user_id, type: Integer
    end
    get do
      { shelters: Shelter.all }
    end
  end
end
