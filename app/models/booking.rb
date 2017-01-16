# == Schema Information
#
# Table name: bookings
#
#  id          :integer          not null, primary key
#  guest_id    :integer          not null
#  dwelling_id :integer          not null
#  start_date  :date             not null
#  end_date    :date             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Booking < ActiveRecord::Base
  validates :guest_id, :dwelling_id, :start_date, :end_date, presence: true

  belongs_to :guest,
  foreign_key: :guest_id,
  class_name: :User

  belongs_to :dwelling

end
