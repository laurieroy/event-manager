Rails.application.routes.draw do
  namespace :api do
    resources :events, except: %i[new edit]
  end

  # Defines the root path route ("/")
  root "site#index"
end
