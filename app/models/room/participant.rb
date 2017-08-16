# frozen_string_literal: true

class Room::Participant < ApplicationRecord
  belongs_to :room
  belongs_to :user
end
