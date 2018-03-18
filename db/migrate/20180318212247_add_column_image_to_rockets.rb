class AddColumnImageToRockets < ActiveRecord::Migration[5.1]
  def change
    add_column :rockets, :image, :string

  end
end
