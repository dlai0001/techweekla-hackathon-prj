class CreateChats < ActiveRecord::Migration
  def change
    create_table :chats do |t|
      t.references :shelter, index: true
      t.references :user, index: true

      t.timestamps
    end
  end
end
