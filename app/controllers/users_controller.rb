class UsersController < ApplicationController
 # TODO: skip_before_action before_action 
 rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

 skip_before_action :authorized, only: [:index, :create]
 before_action :now_authorized, only: [:create, :destroy]

 def index
  render json: User.all, status: :ok
 end

 # me / auth 
 def show
  render json: current_user
 end

 # signup
 # def create
 #  @user = User.new(user_params)
 #  if @user.save
 #   session[:user_id] = @user.id
 #   render json: @user, status: :created
 #  else  
 #   render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
 #  end
 # end

 def create
  user = User.create!(user_params)
  session[:user_id] = user.id
  render json: user, status: :created
end

 private

 def user_params
  params.permit(:username, :password)
 end

 def render_unprocessable_entity_response(object)
  render json: { errors: object.record.errors.full_messages }, status: :unprocessable_entity
 end

end
