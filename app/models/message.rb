# frozen_string_literal: true

class Message < ApplicationRecord
  belongs_to :user
end

# == Schema Information
#
# Table name: messages
#
#  content :string
#  id      :integer          not null, primary key
#
