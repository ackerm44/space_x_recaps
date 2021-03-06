class SessionsController < ApplicationController

  def create
    user = User.find_by(username: auth_params[:username])
    if user && user.authenticate(auth_params[:password])
      jwt = Auth.issue({user: user.id})
      render json: {jwt: jwt}
    else
      render json: {:errors=>
        [{:detail=>"incorrect email or password",
          :source=>{:pointer=>"user/err_type"}}
        ]}, status: 404
    end
  end

  private
    def auth_params
      params.require(:auth).permit(:username, :password)
    end
end
