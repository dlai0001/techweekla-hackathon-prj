class AddLikedToUserDogs < ActiveRecord::Migration
  def change
    add_column :user_dogs, :liked, :boolean
  end
end
