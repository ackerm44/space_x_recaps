class Rocket < ApplicationRecord
  has_many :launches
  has_many :launchpads, through: :launches
end
