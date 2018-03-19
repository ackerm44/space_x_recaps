class ChangePasswordColumnInUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :password
    remove_column :users, :password_confirmation
    add_column :users, :password_digest, :string
    add_column :users, :email, :string
  end
end
