class TripsController < ApplicationController
  before_action :set_trip, only: [:show, :update, :destroy]

  
  def index
    @trips = Trip.all
    @trips = Trip.where(aasm_state: [:published, :in_progress]).order(created_at: :desc)

    render json: @trips
  end

  
  def show
    render json: @trip
  end

 
  def create
    @trip = Trip.new(trip_params)
    @trip.user = current_user

    if @trip.save
      render json: @trip, status: :created, location: @trip
    else
      render json: @trip.errors, status: :unprocessable_entity
    end
  end

  def update
    trip = Trip.find params[:id]
    if params.include?("aasm_state")
      trip.publish!
      render json: trip
    elsif (trip.user == current_user) && trip.update(trip_params)
      render json: trip
    else
      render json: { errors: trip.errors.full_messages}
    end
  end

  def destroy
    @trip.destroy
  end

  private
    def set_trip
      @trip = Trip.find(params[:id])
    end

    def trip_params
      params.require(:trip).permit(:title, :description, :location, :start_date, :end_date, :duration, :user_id, :aasm_state)
    end
end
