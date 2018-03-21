class CurrentUserController < ApplicationController

  def show
    # user = User.find(current_user)
    # raise user.inspect
    render json: current_user
  end
end
