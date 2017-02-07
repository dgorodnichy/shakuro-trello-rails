Rails.application.routes.draw do
  resources :boards do
    resources :lists do
      resources :items
    end
  end
end
