Rails.application.routes.draw do
  # resources :messages
  # resources :users

  post "/signup", to: "users#create"


end
