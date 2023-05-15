class SessionsController < ApplicationController
 # TODO: login / create method here 
 skip_before_action :authorized, only: [:create, :destroy]

 # def index
 #  render json: User.all
 # end

 # login 
 def create
  logged_in_user = User.find_by(username: params[:username])
  if logged_in_user&.authenticate(params[:password])
   session[:user_id] = logged_in_user.id 
   render json: logged_in_user, status: :created
  else 
   render json: { errors: ["Invalid Username or Password. Please try again!"] }, status: :unprocessable_entity
  end
 end

  # logout 
  def destroy
   session.delete :user_id
   render json: { message: ["You are now logged out!"] }, status: :ok
   # head :no_content
  end


end
