json.set! @dwelling.id do
  json.extract! @dwelling, :id, :owner_id,  :location, :lat, :long, :price,
    :image_url, :about_this, :type, :title, :check_in, :check_out,
    :house_rules, :guest_limit, :bedrooms, :beds, :featured, :description, :rating
  json.reviews do
    json.array! @dwelling.reviews do |review|
      json.extract! review, :body, :rating, :created_at, :id
      # json.guestName review.guest.fname
      # json.guestImage review.guest.image_url
    end

  end
  # json.owner_image @dwelling.owner.image_url
  # json.owner_name @dwelling.owner.fname

end
