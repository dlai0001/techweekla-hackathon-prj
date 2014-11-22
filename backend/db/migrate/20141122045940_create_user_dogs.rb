class CreateUserDogs < ActiveRecord::Migration
  def change
    create_table :user_dogs do |t|
      t.references :user, index: true
      t.references :dog, index: true

      t.timestamps
    end
  end
end
