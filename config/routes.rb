Rails.application.routes.draw do
  mount ActionCable.server => "/cable"

  resources :messages
  resources :users

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
