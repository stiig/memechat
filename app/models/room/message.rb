# frozen_string_literal: true

class Room::Message < ApplicationRecord
  belongs_to :room
  belongs_to :message
end
