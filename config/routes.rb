Rails.application.routes.draw do
  resources :instructors, only: [:index, :show]
  
  resources :courses do
    resources :enrollments, only: [:index, :create, :destroy]
  end
end

