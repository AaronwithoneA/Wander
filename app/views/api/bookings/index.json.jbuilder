@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking, :guest_id, :dwelling_id, :start_date, :end_date
  end
end
