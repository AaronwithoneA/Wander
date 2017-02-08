json.extract! @review, :id, :body, :rating, :created_at, :dwelling_id, :guest
json.date @review.convert_month
json.date @review.convert_year
