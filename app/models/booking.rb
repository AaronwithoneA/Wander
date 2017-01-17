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
  validates :guest_id, :dwelling_id, :start_date, :end_date, :guest_number, presence: true
  validate :start_befor_end, :dwelling_is_available

  belongs_to :guest,
  foreign_key: :guest_id,
  class_name: :User

  belongs_to :dwelling

  def start_before_end
    return unless self.start_date && self.end_date
    return if self.start_date < self.end_date
      errors[:start_date] << "must come before end date"
      errors[:end_date] << "must come after start date"
    end

  def dwelling_is_available
    return unless self.start_date && self.end_date
    unless self.spot.is_available?(self.start_date, self.end_date)
      errors[:spot] << "unavailable at selected dates"
    end
  end
end
