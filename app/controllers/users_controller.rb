class UsersController < ApplicationController
 # TODO: skip_before_action before_action 

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
