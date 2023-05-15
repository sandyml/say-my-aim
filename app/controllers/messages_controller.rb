class MessagesController < ApplicationController
 rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

 skip_before_action :authorized, only: [:index]

 def index
  render json: Message.all, status: :ok
 end

 def create
  message = current_user.messages.create(message_params)
  if message.save
   render json: message, status: :created
  else
   render json: { errors: message.errors.full_message }, status: :unprocessable_entity
  end
 end

 private

 def message_params
  params.permit(:content)
 end
 
 private

 def render_unprocessable_entity_response(object)
  render json: { errors: object.errors.full_message }, status: :unprocessable_entity
 end

end
