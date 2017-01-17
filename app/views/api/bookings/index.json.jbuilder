@bookings.reverse.each do |booking|
  json.set! booking.id do
    json.extract! booking, :id, :guest_id, :dwelling_id, :start_date, :end_date, :guest_number
    json.dwellingTitle booking.dwelling.title
    json.dwellingLocation booking.dwelling.location
    json.dwellingImage booking.dwelling.image_url
  end
end
