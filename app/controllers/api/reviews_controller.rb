class Api::ReviewsController < ApplicationController

  def create

    @review = Review.new(review_params)
    @review.guest_id = current_user.id
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    @reviews = Review.where(dwelling_id: params[:dwellingId])
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :dwelling_id)
  end
end
