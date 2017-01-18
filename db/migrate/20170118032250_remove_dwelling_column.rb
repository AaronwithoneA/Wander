class RemoveDwellingColumn < ActiveRecord::Migration
  def change
    remove_column :dwellings, :rating
  end
end
