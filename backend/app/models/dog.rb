class Dog < ActiveRecord::Base
  belongs_to :shelter

  has_many :liked_user_dogs, -> { liked }, class_name: "UserDog"
  has_many :liked_users, through: :liked_user_dogs, source: :user
end
