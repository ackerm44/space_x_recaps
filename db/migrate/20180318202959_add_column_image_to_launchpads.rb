class AddColumnImageToLaunchpads < ActiveRecord::Migration[5.1]
  def change
    add_column :launchpads, :image, :string
  end
end
