class SessionsController < ApplicationController
 # TODO: login / create method here 
 skip_before_action :authorized, only: [:create]

 # def index
 #  render json: User.all
 # end

 # login 
 def create
  logged_in_user = User.find_by(username: params[:username])
 end
end
