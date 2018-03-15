class Launch < ApplicationRecord
  belongs_to :rocket
  belongs_to :launchpad
end
