class Api::DwellingsController < ApplicationController
  def create
    @dwelling = Dwelling.new()
    # @dwelling.owner_id = current_user.id
    if @dwelling.save
      render 'api/dwellings/show'
    else
      render json: @dwelling.errors.full_messages, status: 422
    end
  end

  def index
    @dwellings = Dwelling.all
  end

  private

  def dwelling_params
    params.require(:dwelling).permit(:location, :price, :image_url, :description, :type, :guest_limit, :bedrooms, :beds)
  end

end
