class CreateLaunchpads < ActiveRecord::Migration[5.1]
  def change
    create_table :launchpads do |t|
      t.string :name
      t.string :status
      t.string :location_name
      t.string :location_region
      t.float :latitude
      t.float :longitude
      t.text :details
    end
  end
end
