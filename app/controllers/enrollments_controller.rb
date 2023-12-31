class EnrollmentsController < ApplicationController
    before_action :set_enrollment, only: [:show, :edit, :update, :destroy]

  def index
    @enrollments = Enrollment.all
    render json: @enrollments
  end

  def show
    render json: @enrollment
  end

  def new
    @enrollment = Enrollment.new
  end

  def create
    @enrollment = Enrollment.new(enrollment_params)

    if @enrollment.save
      redirect_to @enrollment, notice: 'Enrollment was successfully created.'
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @enrollment.update(enrollment_params)
      redirect_to @enrollment, notice: 'Enrollment was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @enrollment.destroy
    redirect_to enrollments_url, notice: 'Enrollment was successfully destroyed.'
  end

  private

  def set_enrollment
    @enrollment = Enrollment.find(params[:id])
  end

  def enrollment_params
    params.require(:enrollment).permit(:course_id, :instructor_id)
  end
end
