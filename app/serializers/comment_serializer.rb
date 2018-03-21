class CommentSerializer < ActiveModel::Serializer
  attributes :id, :launch_id, :comment_body, :created_at
  belongs_to :user
end
