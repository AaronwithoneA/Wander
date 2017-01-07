class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(session_params)
    if @user
      login(@user)
    elsif
      render(
      json: ["Invalid credentials"],
      status: 404
      )

  end

  def destroy
    @user = current_user
    if @user
      @user.logout
      render api/users/show
    else
      render(
        json: ["Nobody signed in"],
        status: 404
      )
    end
  end

  private

  def session_params
    params.require(:user).permit(:username, :password)
  end
end
