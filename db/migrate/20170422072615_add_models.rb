class AddModels < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.string :content
    end
  end
end
