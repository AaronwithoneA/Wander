class CreateDwellings < ActiveRecord::Migration
  def change
    create_table :dwellings do |t|
      t.integer :owner_id
      t.string :location
      t.float :lat
      t.float :long
      t.integer :price
      t.string :image_url
      t.string :description
      t.string :type
      t.integer :guest_limit
      t.integer :bedrooms
      t.integer :beds

      t.timestamps null: false
    end

    add_index :dwellings, :owner_id
  end
end
