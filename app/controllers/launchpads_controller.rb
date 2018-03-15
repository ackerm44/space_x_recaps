class LaunchpadsController < ApplicationController

  def index
    @launchpads = Launchpad.all
    render json: @launchpads, status: 200
  end
end
