class UsersController < ApplicationController
  include ErrorSerializer
  skip_before_action :authenticate, only: [:create]


  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  def create
    user = User.new(user_params)
    if user.save
      jwt = Auth.issue({user: user.id})
      render json: {jwt: jwt}
    else
      render json: ErrorSerializer.serialize(user.errors), status: 422
    end
  end

  private

    def user_params
      params.require(:auth).permit(:username, :email, :password, :password_confirmation)
    end


end
