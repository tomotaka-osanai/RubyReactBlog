class CreateContents < ActiveRecord::Migration[8.0]
  def change
    create_table :contents do |t|
      t.references :article, null: false, foreign_key: true, index: true
      t.integer :sort
      t.string :title
      t.text :body

      t.timestamps
    end
  end
end
