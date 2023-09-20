class AddInstructorIdToEnrollments < ActiveRecord::Migration[7.0]
  def change
    add_column :enrollments, :instructor_id, :integer
  end
end
