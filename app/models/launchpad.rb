class Launchpad < ApplicationRecord
  has_many :launches
  has_many :rockets, through: :launches
end
