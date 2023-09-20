class AddDurationAndPriceToCourses < ActiveRecord::Migration[7.0]
  def change
    add_column :courses, :duration, :string
    add_column :courses, :price, :integer
  end
end
