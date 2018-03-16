class AddColumnsToLaunches < ActiveRecord::Migration[5.1]
  def change
    add_column :launches, :launch_success, :boolean
    add_column :launches, :reuse_core, :boolean
    add_column :launches, :reuse_side_core1, :boolean
    add_column :launches, :reuse_side_core2, :boolean
    add_column :launches, :reuse_fairings, :boolean
    add_column :launches, :reuse_capsule, :boolean
    
  end
end
