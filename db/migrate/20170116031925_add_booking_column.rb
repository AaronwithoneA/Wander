class AddBookingColumn < ActiveRecord::Migration
  def change
    add_column :bookings, :guest_number, :integer
  end
end
