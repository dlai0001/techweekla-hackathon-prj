class User < ActiveRecord::Base

  has_many :liked_user_dogs, -> { liked }, class_name: "UserDog"
  has_many :liked_dogs, through: :liked_user_dogs, source: :dog

  def like_dog(dog)
    liked_user_dogs.where(dog_id: dog.id, liked: true).first_or_create!
  end
end
