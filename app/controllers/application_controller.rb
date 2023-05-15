class ApplicationController < ActionController::API
 include ActionController::Cookies

 # TODO: current_user, logged_in and before_action :authorized 

 before_action :authorized

 def logged_in?
  !!session[:user_id]
 end

 def current_user
  User.find_by_id(session[:user_id])
 end

 def now_authorized
  render json: { errors: ["You are already logged in!"] }, status: :unauthorized if logged_in?
 end

 def authorized
  render json: { errors: ["You are not logged in! Please log in!"] }, status: :unauthorized unless logged_in?
 end

 def authorize_user_resource(user_id)
  render json: { errors: ["You are not authorized"] }, status: :unauthorized unless user_id == current_user.id
 end

end
