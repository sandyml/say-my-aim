class UsersController < ApplicationController
 # TODO: skip_before_action before_action 

 skip_before_action :authorized, only: [:index, :create]

 def index
  render json: User.all, status: :ok
 end

 # me / auth 
 def show
  render json: current_user
 end

 # signup
 def create
  @user = User.new(user_params)
  if @user.save
   session[:user_id] = @user.id
   render json: @user, status: :created
  else  
   render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
  end
 end

 private

 def user_params
  params.permit(:username, :password)
 end

end
