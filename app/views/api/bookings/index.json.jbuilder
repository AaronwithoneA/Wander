@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking, :id, :guest_id, :dwelling_id, :dwelling, :start_date, :end_date, :guest_number
    json.dwellingTitle booking.dwelling.title
    json.dwellingLocation booking.dwelling.location
    json.dwellingImage booking.dwelling.image_url
    json.ownerImage booking.dwelling.owner.image_url
    json.dates booking.dates
  end
end
