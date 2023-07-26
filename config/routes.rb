Rails.application.routes.draw do
  namespace :api do
    resources :events, except: %i[new edit]
  end

  get "events", to: "site#index"
  get "events/new", to: "site#index"
  get "events/:id", to: "site#index"
  get "events/:id/edit", to: "site#index"
  
  # Defines the root path route ("/")
  root "site#index"
end
