Rails.application.routes.draw do
  get '*path', to: "static_pages#index", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

  resources :users, only: [:index]
end
