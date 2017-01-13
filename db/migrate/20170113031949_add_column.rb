class AddColumn < ActiveRecord::Migration
  def change
    add_column :dwellings, :rating, :integer
  end
end
