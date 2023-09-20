class InstructorsController < ApplicationController
    before_action :set_instructor, only: [:show, :update]
    def index
        render json: Instructor.all.order(:name), status: :ok
    end
    
    def show
        instructor = Instructor.find(params[:id])
        render json: instructor, status: :ok
    end
    def update
        if @instructor.update(instructor_params)
          redirect_to @instructor, notice: 'Instructor was successfully updated.'
        else
          render :edit
        end
    end

    private

  def set_instructor
    @instructor = Instructor.find(params[:id])
  end

  def instructor_params
    params.require(:instructor).permit(:name, :email)
  end

end
