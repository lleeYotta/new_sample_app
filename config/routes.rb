Rails.application.routes.draw do
  get 'sessions/new'

  get 'users/new'

  #get 'static_pages/home'

  #get 'static_pages/help'

  #get  'static_pages/about'
  #get  'static_pages/contact'
  #root 'application#hello'
  root 'static_pages#home'

  get  '/help',    to: 'static_pages#help'
  get  '/about',   to: 'static_pages#about'
  get  '/contact', to: 'static_pages#contact'
  get '/test', to: 'static_pages#test'
  get '/testImages', to: 'static_pages#testImages'
  get '/frame1', to: 'static_pages#frame1'
  get '/frameset1', to: 'static_pages#frameset1'
  get '/left1', to: 'static_pages#left1'

# new window 

get '/child', to: 'static_pages#child'
get '/script01', to: 'static_pages#script01'
get '/script02', to: 'static_pages#script02'
get '/script03', to: 'static_pages#script03' 
get '/script04', to: 'static_pages#script04'
get '/script05', to: 'static_pages#script05'
get '/script06', to: 'static_pages#script06' 


  #get  '/home', to: 'static_pages#home'

  get  '/signup',  to: 'users#new'
  post '/signup',  to: 'users#create'

  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
  

  resources :users


  #form 
get '/formScript01', to: 'static_pages#formScript01'
get '/formScript02', to: 'static_pages#formScript02'
get '/formScript03', to: 'static_pages#formScript03' 
get '/formScript04', to: 'static_pages#formScript04'
get '/formScript05', to: 'static_pages#formScript05'
get '/formScript06', to: 'static_pages#formScript06' 
get '/formScript07', to: 'static_pages#formScript07' 
get '/formScript08', to: 'static_pages#formScript08'
get '/formScript09', to: 'static_pages#formScript09'
get '/formScript10', to: 'static_pages#formScript10' 


#chap8
get '/chap8script01', to: 'static_pages#chap8script01' 
get '/chap8script02', to: 'static_pages#chap8script02'
get '/chap8script03', to: 'static_pages#chap8script03'
get '/chap8script04', to: 'static_pages#chap8script04'
get '/chap8script05', to: 'static_pages#chap8script05'
get '/chap8script06', to: 'static_pages#chap8script06'
get '/chap8script07', to: 'static_pages#chap8script07'
get '/chap8script08', to: 'static_pages#chap8script08'


#chap9
get '/chap9script01', to: 'static_pages#chap9script01' 
get '/chap9script02', to: 'static_pages#chap9script02'
get '/chap9script03', to: 'static_pages#chap9script03'
get '/chap9script04', to: 'static_pages#chap9script04'
get '/chap9script05', to: 'static_pages#chap9script05'
get '/chap9script06', to: 'static_pages#chap9script06'
get '/chap9script07', to: 'static_pages#chap9script07'
get '/chap9script08', to: 'static_pages#chap9script08'
get '/chap9script09', to: 'static_pages#chap9script09'
get '/chap9script10', to: 'static_pages#chap9script10'


#chap10
get '/chap10script01', to: 'static_pages#chap10script01' 
get '/chap10script02', to: 'static_pages#chap10script02'
get '/chap10script03', to: 'static_pages#chap10script03'
get '/chap10script04', to: 'static_pages#chap10script04'
get '/chap10script05', to: 'static_pages#chap10script05'
get '/chap10script06', to: 'static_pages#chap10script06'
get '/chap10script07', to: 'static_pages#chap10script07'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
