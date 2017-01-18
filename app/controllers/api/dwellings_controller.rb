class Api::DwellingsController < ApplicationController
  def create
    @dwelling = Dwelling.new(dwelling_params)
    @dwelling.owner_id = current_user.id
    if @dwelling.save
      render :show
    else
      render json: @dwelling.errors.full_messages, status: 422
    end
  end

  def show
    @dwelling = Dwelling.find(params[:id])
  end

  def index
    @dwellings = Dwelling.where("price < ?", filter_params[:maxPrice])

    # @dwellings = Dwelling.all
  end

  private

  def dwelling_params
    params.require(:dwelling).permit(:title, :about_this, :check_in,
    :check_out, :house_rules, :location, :price, :image_url,
    :description, :guest_limit, :bedrooms, :beds, :maxPrice, :minPrice)
  end

  def price_range
    (params[:minPrice]..params[:maxPrice])
  end

  def filter_params
    params.require(:filters).permit(:maxPrice)
  end


end
