class ChangeColumnYearInLaunchesToString < ActiveRecord::Migration[5.1]
  def change
    change_column :launches, :year, :string
    
  end
end
