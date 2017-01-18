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

ActiveRecord::Schema.define(version: 20170118032250) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer  "guest_id",     null: false
    t.integer  "dwelling_id",  null: false
    t.date     "start_date",   null: false
    t.date     "end_date",     null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "guest_number"
  end

  add_index "bookings", ["dwelling_id"], name: "index_bookings_on_dwelling_id", using: :btree
  add_index "bookings", ["guest_id"], name: "index_bookings_on_guest_id", using: :btree

  create_table "dwellings", force: :cascade do |t|
    t.integer  "owner_id"
    t.string   "location"
    t.float    "lat"
    t.float    "long"
    t.integer  "price"
    t.string   "image_url"
    t.string   "description"
    t.string   "type"
    t.integer  "guest_limit"
    t.integer  "bedrooms"
    t.integer  "beds"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.text     "about_this"
    t.boolean  "featured"
    t.string   "title"
    t.string   "check_in"
    t.string   "check_out"
    t.text     "house_rules"
  end

  add_index "dwellings", ["owner_id"], name: "index_dwellings_on_owner_id", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "guest_id",    null: false
    t.integer  "dwelling_id", null: false
    t.integer  "rating",      null: false
    t.text     "body",        null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "reviews", ["dwelling_id"], name: "index_reviews_on_dwelling_id", using: :btree
  add_index "reviews", ["guest_id"], name: "index_reviews_on_guest_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "image_url"
    t.string   "fname"
    t.string   "lname"
  end

end
