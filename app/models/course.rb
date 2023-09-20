class Course < ApplicationRecord
  belongs_to :instructor
  has_many :enrollments

  validates :duration, presence: true
  validates :price, presence: true
end
