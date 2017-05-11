# frozen_string_literal: true

class MessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_for Message
  end
end
