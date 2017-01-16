@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :body, :rating, :created_at, :id
  end
end
