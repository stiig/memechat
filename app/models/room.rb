# frozen_string_literal: true

class Room < ApplicationRecord
  belongs_to :owner, class_name: 'User'

  has_many :room_messages, dependent: :destroy
  has_many :messages, through: :room_messages, dependent: :destroy

  has_many :participants, dependent: :destroy
  has_many :users, through: :participants, dependent: :nullify
end
