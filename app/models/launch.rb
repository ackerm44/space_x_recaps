class Launch < ApplicationRecord
  belongs_to :rocket
  belongs_to :launchpad

  validates :flight_number, uniqueness: true

  def self.past_launches
    self.all.select {|launch| launch.launch_date < Date.today}
  end

  def self.upcoming_launches
    self.all.select {|launch| launch.launch_date > Date.today}
  end

  def self.update_or_create_by(flight_number, attributes)
    obj = self.find_or_create_by(flight_number)
    obj.update(attributes)
    return obj
  end

end
