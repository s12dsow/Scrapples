class AddCompleteFieldToRounds < ActiveRecord::Migration
  def change
    add_column :rounds, :complete?, :boolean, :default => false
  end
end
