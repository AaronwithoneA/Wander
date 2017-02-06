class Api::BookingsController < ApplicationController

  def index
    @bookings = Booking.where(guest_id: current_user.id).to_a.reverse!
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.guest_id = current_user.id
    if @booking.save
      render :index
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    if @booking
      @booking.destroy
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :dwelling_id, :guest_number)
  end
end
