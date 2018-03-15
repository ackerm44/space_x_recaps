class CreateLaunches < ActiveRecord::Migration[5.1]
  def change
    create_table :launches do |t|
      t.integer :flight_number
      t.integer :year
      t.datetime :launch_date
      t.string :rocket_name
      t.string :launchpad_name
      t.string :patch_image
      t.string :article_link
      t.string :video_link
      t.text :details
      t.integer :launchpad_id
      t.integer :rocket_id
      t.timestamps
    end
  end
end
