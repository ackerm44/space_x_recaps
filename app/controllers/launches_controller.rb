class LaunchesController < ApplicationController

  def past
    past_launches = Launch.past_launches
    render json: past_launches, status: 200
  end

  def upcoming
    upcoming_launches = Launch.upcoming_launches
    render json: upcoming_launches, status: 200
  end
end
