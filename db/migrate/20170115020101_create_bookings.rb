class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.integer :guest_id, null: false
      t.integer :dwelling_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false

      t.timestamps null: false
    end
    add_index :bookings, :guest_id
    add_index :bookings, :dwelling_id
  end
end
