class AddDwellingColumns < ActiveRecord::Migration
  def change
    add_column :dwellings, :about_this, :text
    add_column :dwellings, :featured, :boolean
  end
end
