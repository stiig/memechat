# frozen_string_literal: true

class Group < ApplicationRecord
  belongs_to :user
  has_many :users, dependent: :nullify
end
