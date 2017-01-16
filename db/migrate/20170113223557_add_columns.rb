class AddColumns < ActiveRecord::Migration
  def change
    add_column :dwellings, :title, :string
    add_column :dwellings, :check_in, :string
    add_column :dwellings, :check_out, :string
    add_column :dwellings, :house_rules, :text
  end
end
