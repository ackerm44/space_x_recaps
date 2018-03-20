Rails.application.routes.draw do

  scope '/api' do
    get :rockets, to: 'rockets#index'
    get :launchpads, to: 'launchpads#index'
    get :past, to: 'launches#past'
    get :upcoming, to: 'launches#upcoming'
    get :comments, to: 'comments#index'
    post :login, to: 'sessions#create'
    post :signup, to: 'users#create'

  end

  get '/users/current-user', to: "current_user#show"
  # resources :users, only: [:index, :show]


end
