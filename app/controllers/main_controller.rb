# frozen_string_literal: true

class MainController < ApplicationController
  def index
    @message = Message.new
  end
end
