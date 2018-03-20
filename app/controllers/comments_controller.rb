class CommentsController < ApplicationController

  def index
    comments = Comment.all
    render json: comments, status: 200
  end

  def create
    comment = Comment.new(comment_params)
    # binding.pry
    if comment.save
      render json: comment, status: 201
    end
  end

  private
  # def auth
  #   Auth.decode(token)
  # end
  #
  # def current_user_id
  #   user = User.find(auth["user"])
  #   if user
  #     @current_user.id ||= user.id
  #   end
  # end

  def comment_params
    binding.pry
    user = User.find(current_user)

    user = user.id
    params.require(:comment).permit(:comment_body, :launch_id).merge(user)
  end

end
