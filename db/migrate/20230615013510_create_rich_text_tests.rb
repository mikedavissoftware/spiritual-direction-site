class CreateRichTextTests < ActiveRecord::Migration[7.0]
  def change
    create_table :rich_text_tests do |t|
      t.text :body

      t.timestamps
    end
  end
end
