class Message < ApplicationRecord
  belongs_to :user
  # validates :message, length: { maximum: 500 }
  
  # if create successfully => run broadcast_message method
  # after_create_commit do 
  #   broadcast_message 
  # end
  after_create_commit { broadcast_message }
  
  private
  
  def broadcast_message
    ActionCable.server.broadcast("MessagesChannel", self.to_json(include: :user))
  end
end

     # Action.cable.server.broadcast("MessagesChannel", Message.to_json(include: :user))
     # json will stringify it to be broadcasted clientside to serverside KEYWORD: BROADCASTED
     # Action.cable.server.broadcast("MessagesChannel", self.to_json(include: :user))