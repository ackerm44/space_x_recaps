Rails.application.routes.draw do

  post 'user_token' => 'user_token#create'
  scope '/api' do
    get :rockets, to: 'rockets#index'
    get :launchpads, to: 'launchpads#index'
    get :past, to: 'launches#past'
    get :upcoming, to: 'launches#upcoming'
    post 'user_token' => 'user_token#create'
  end



end
