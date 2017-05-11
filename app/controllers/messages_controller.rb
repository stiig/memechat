# frozen_string_literal: true

class MessagesController < ApplicationController
  def create
    message = Message.new(message_params)
    return unless message.save

    MessagesChannel.broadcast_to(Message, message: message.content)
    head :ok
  end

  private

  def message_params
    params.require(:message).permit(:content)
  end
end
