json.extract! @review, :id, :body, :rating, :dwelling_id
json.guestName @review.guest.fname
json.guestImage @review.guest.image_url
