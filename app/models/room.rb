# frozen_string_literal: true

class Room < ApplicationRecord
  belongs_to :user
  has_many :room_messages
  has_many :messages, through: :room_messages
end
