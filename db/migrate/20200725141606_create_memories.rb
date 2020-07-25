class CreateMemories < ActiveRecord::Migration[5.2]
  def change
    create_table :memories do |t|
      t.string :title
      t.string :location
      t.datetime :location
      t.integer :lane_id
      t.timestamps
    end
  end
end
