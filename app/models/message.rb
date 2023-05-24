class Message < ApplicationRecord
  belongs_to :user

  # if create successfully => run broadcast_message method
  after_create_commit do 
    broadcast_message 
  end
    # after_create_commit {broadcast_message}
    
  private 

  # stream_from "MessagesChannel"
  def broadcast_message
    # Action.cable.server.broadcast("MessagesChannel", Message.to_json(include: :user))
    # json will stringify it to be broadcasted clientside to serverside KEYWORD: BROADCASTED
    Action.cable.server.broadcast("MessagesChannel", self.to_json(include: :user))
  end

end
