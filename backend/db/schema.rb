# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141122045956) do

  create_table "chats", force: true do |t|
    t.integer  "shelter_id"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "chats", ["shelter_id"], name: "index_chats_on_shelter_id"
  add_index "chats", ["user_id"], name: "index_chats_on_user_id"

  create_table "dogs", force: true do |t|
    t.string   "image_url"
    t.integer  "shelter_id"
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "dogs", ["shelter_id"], name: "index_dogs_on_shelter_id"

  create_table "shelters", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "user_dogs", force: true do |t|
    t.integer  "user_id"
    t.integer  "dog_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "user_dogs", ["dog_id"], name: "index_user_dogs_on_dog_id"
  add_index "user_dogs", ["user_id"], name: "index_user_dogs_on_user_id"

  create_table "users", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
