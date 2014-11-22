class CreateDogs < ActiveRecord::Migration
  def change
    create_table :dogs do |t|
      t.string :image_url
      t.references :shelter, index: true
      t.string :name

      t.timestamps
    end
  end
end
