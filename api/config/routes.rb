Rails.application.routes.draw do

  scope module: :v1, constraints: ApiVersion.new('v1', true) do
    resources :trips
    resources :users, only: [:new, :create] do
      resources :friendships, shallow: true, only: [:new, :create, :index, :destroy]
    end
    resources :sessions, only: [:new, :create] do
      delete :destroy, on: :collection
    end
    resources :tokens, only: [:create]
    
  end
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  

  root "trips#index"
end
