class MessagesController < ApplicationController

  def create
    message = Message.new(message_params)
    if message.save
      ActionCable.server.broadcast 'messages',
                                   message: "App says #{message.content}"
      head :ok
    end
  end

  private

  def message_params
    params.require(:message).permit(:content)
  end
end
