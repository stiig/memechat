# frozen_string_literal: true

class User < ApplicationRecord
  has_many :messages, dependent: :nullify
  has_many :notifications, dependent: :destroy
  has_many :room_messages, class_name: 'Room::Message', dependent: :nullify
  has_many :room_participants, class_name: 'Room::Participant', dependent: :nullify
end
