Rails.application.routes.draw do
  namespace :api, constraints: { format: 'json' } do
    namespace :v1, constraints: { format: 'json' } do
      post 'ping',
        controller: 'basic',
        action: 'ping'
    end
  end
end
