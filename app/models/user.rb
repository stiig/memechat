# frozen_string_literal: true

class User < ApplicationRecord
  has_many :messages
  has_many :notifications
  has_many :room_messages, class_name: 'Room::Message'
  has_many :room_participants, class_name: 'Room::Participant'
end
