class ApplicationController < ActionController::API
  before_action :authenticate

  def logged_in?
    !!current_user
  end

  def current_user
    if auth_present?
      user = User.find(auth["user"])
      if user
        @current_user ||= user
      end
    end
  end

  def self.current_user_id
    user = User.find(auth["user"])
    if user
      @current_user.id ||= user.id
    end
  end

  def authenticate
    # render json: {error: "unauthorized"}, status: 401 unless logged_in?
  end

  private
  def token

    request.env["HTTP-AUTHORIZATION"].scan(/Bearer (.*)$/).flatten.last
  end

  def auth
    
    Auth.decode(token)
  end

  def auth_present?
    !!request.env.fetch("HTTP-AUTHORIZATION", "").scan(/Bearer/).flatten.first
  end
end
