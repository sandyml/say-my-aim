class MessagesChannel < ApplicationCable::Channel
  # private DM's maybe future add #{params[:id]}
  def subscribed
    stream_from "MessagesChannel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
