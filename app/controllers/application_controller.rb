class ApplicationController < ActionController::API
  # before_action :authenticate

  def logged_in?
    !!current_user
  end

  def current_user
    # binding.pry
    if auth_present?
      user = User.find(auth["user"])
      if user
        @current_user ||= user
      end
    end
  end


  def authenticate
    # render json: {error: "unauthorized"}, status: 401 unless logged_in?
  end

  private
  def token
    request.headers['authorization'].scan(/Bearer (.*)$/).flatten.last
  end

  def auth
    Auth.decode(token)
  end

  def auth_present?
    if request.headers['authorization'] != "Bearer undefined"
      !!request.headers['authorization']
    else
      false
    end
  end
end
