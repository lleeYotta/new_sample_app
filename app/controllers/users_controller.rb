class UsersController < ApplicationController
  def new
  	@user = User.new
  end

   def show
    @user = User.find(params[:id])
     #debugger
  end

  def create

  	 #@user = User.new(params[:user])    # Not the final implementation!

  	 @user = User.new(user_params)
    if @user.save
      # Handle a successful save.
      #redirect_to @user
      log_in @user
      flash[:success] = "Welcome to the Sample App!"
      redirect_to user_url(@user)
    else
      render 'new'
    end
  	
  end

  def user_params
      params.require(:user).permit(:name, :email, :password,
                                   :password_confirmation)
    end


end
