# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'main#index'
  resources :messages, only: :create
  resources :frontend, only: :index
end
