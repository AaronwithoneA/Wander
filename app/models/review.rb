# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  guest_id    :integer          not null
#  dwelling_id :integer          not null
#  rating      :integer          not null
#  body        :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ActiveRecord::Base
  validates :body, :rating, :guest_id, :dwelling_id, presence: true

  belongs_to :guest,
  foreign_key: :guest_id,
  class_name: :User

  belongs_to :dwelling

  def convert_month
    self.created_at.strftime("%B")
  end

  def convert_year
    self.created_at.strftime("%Y")
  end
end
