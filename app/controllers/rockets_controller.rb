class RocketsController < ApplicationController

  def index
    @rockets = Rocket.all
    render json: @rockets, status: 200
  end

end
