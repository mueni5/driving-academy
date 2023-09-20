class CoursesController < ApplicationController
    before_action :set_course, only: [:show, :edit, :update, :destroy]
  
    def index
      @courses = Course.all
      render json: @courses
    end
  
    def show
      @courses = Course.find(params[:id])
      render json: @course
    rescue ActiveRecord::RecordNotFound
      render json: { error: 'Course not found' }, status: :not_found
    end
  
    # def new
    #   @course = Course.new
    # end
  
    # def create
    #   @course = Course.new(course_params)
  
    #   if @course.save
    #     redirect_to @course, notice: 'Course was successfully created.'
    #   else
    #     render :new
    #   end
    # end
  

  
    def update
      @course = Course.find(params[:id])
      if @course.update(course_params)
        redirect_to @course, notice: 'Course was successfully updated.'
      else
        render :recordNotFound
      end
    end
  
    # def destroy
    #   @course.destroy
    #   redirect_to courses_url, notice: 'Course was successfully destroyed.'
    # end
  
    private
  
    def set_course
      @course = Course.find(params[:id])
    end
  
    def course_params
      params.require(:course).permit(:title, :description, :instructor_id, :duration, :price)
    end
  end
  
