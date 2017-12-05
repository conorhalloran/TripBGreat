module V1
  class DaysController < ApplicationController
    before_action :set_day, only: [:show, :update, :destroy]

    # GET /days
    def index
      @days = Day.all.order(created_at: :desc)

      render json: @days
    end

    # GET /days/1
    def show
      render json: @day
    end

    # POST /days
    def create
      @day = Day.new(day_params)

      if @day.save
        render json: @day, status: :created, location: @day
      else
        render json: @day.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /days/1
    def update
      if @day.update(day_params)
        render json: @day
      else
        render json: @day.errors, status: :unprocessable_entity
      end
    end

    # DELETE /days/1
    def destroy
      @day.destroy
    end

    private

      # Only allow a trusted parameter "white list" through.
      def day_params
        params.require(:day).permit(:title, :description, :date, :start_location, :start_latitude, :start_longitude, :end_location, :end_latitude, :end_longitude, :user_id, :trip_id)
      end
  end
end
