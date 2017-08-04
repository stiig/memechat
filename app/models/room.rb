# frozen_string_literal: true

class Room < ApplicationRecord
  belongs_to :owner, foreign_key: :owner_id, class_name: 'User'
  has_many :room_messages
  has_many :messages, through: :room_messages
end
