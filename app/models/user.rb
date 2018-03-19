class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true
  validates :password, confirmation: true
  validates :password_confirmation, presence: true
end
