class CommentsController < ApplicationController
  before_action :authenticate_user

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

  def comment_params

    user = User.find(current_user)
    binding.pry
    user = user.id
    params.require(:comment).permit(:comment_body, :launch_id).merge(user)
  end

end
