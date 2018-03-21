Rails.application.routes.draw do

  scope '/api' do
    get :rockets, to: 'rockets#index'
    get :launchpads, to: 'launchpads#index'
    get :past, to: 'launches#past'
    get :upcoming, to: 'launches#upcoming'
    get :comments, to: 'comments#index'
    post :comments, to: 'comments#create'
    post :login, to: 'sessions#create'
    post :signup, to: 'users#create'
    get :current, to: "current_user#show"
    get :username, to: "users#show"

  end


  # resources :users, only: [:index, :show]


end
