Rails.application.routes.draw do
  root to: 'main#index'
  resources :messages
end
