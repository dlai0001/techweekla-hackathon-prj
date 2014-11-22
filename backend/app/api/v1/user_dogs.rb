module V1
  class UserDogs < Grape::API
    namespace "user_dogs"

    desc "Create UserDog (aka like/dislike dog)"
    params do
      requires :user_dog, type: Hash do
        requires :user_id
        requires :dog_id
        requires :liked
      end
    end
    post do
      # Doing first or create here because we gonna test it a lot with a couple
      # of dogs
      user_dog = UserDog.where(permitted_params[:user_dog]).first_or_create!
      { user_dog: user_dog  }
    end

  end
end
