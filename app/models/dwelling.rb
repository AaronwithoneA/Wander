# == Schema Information
#
# Table name: dwellings
#
#  id          :integer          not null, primary key
#  owner_id    :integer
#  location    :string
#  lat         :float
#  long        :float
#  price       :integer
#  image_url   :string
#  description :string
#  type        :string
#  guest_limit :integer
#  bedrooms    :integer
#  beds        :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  about_this  :text
#  featured    :boolean
#  rating      :integer
#  title       :string
#  check_in    :string
#  check_out   :string
#  house_rules :text
#

class Dwelling < ActiveRecord::Base


  belongs_to :owner,
  foreign_key: :owner_id,
  class_name: :User

  has_many :reviews

  has_many :bookings
end
