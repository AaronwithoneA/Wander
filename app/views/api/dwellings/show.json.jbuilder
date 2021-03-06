json.set! @dwelling.id do
  json.extract! @dwelling, :id, :owner, :location, :lat, :long, :price,
    :image_url, :about_this, :type, :title, :check_in, :check_out,
    :house_rules, :guest_limit, :bedrooms, :beds, :featured, :description, :rating
  json.reviews do
    json.array! @dwelling.reviews do |review|
      json.extract! review, :body, :rating, :created_at, :id, :guest
      json.guestName review.guest.fname
      json.guestImage review.guest.image_url
      json.month review.convert_month
      json.year review.convert_year
    end
  end
end
