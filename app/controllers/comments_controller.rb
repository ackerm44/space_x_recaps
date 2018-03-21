class CommentsController < ApplicationController

  def index
    comments = Comment.all
    render json: comments, status: 200
  end

  def create
    # binding.pry
    comment = Comment.new(comment_params)
    if comment.save
      render json: comment, status: 201
    end
  end

  private

  def comment_params
    # binding.pry
    user_id = User.find(current_user.id)
    params.require(:comment).permit(:comment_body, :launch_id).merge(user_id: user_id.id)
  end

end
