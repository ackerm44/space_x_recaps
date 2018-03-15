class Launch < ApplicationRecord
  belongs_to :rocket
  belongs_to :launchpad

  validates :flight_number, uniqueness: true
end
