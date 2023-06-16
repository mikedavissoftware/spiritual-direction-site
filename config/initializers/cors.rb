Rails.application.config.middleware.insert_before 0, Rack::Cors do

  # allow do
  #   origins 'https://daggett-control-frontend-2.onrender.com'
  #   resource '/contact_forms',
  #     headers: :any, 
  #     methods: [:post]
  #   resource '*', 
  #     headers: :any, 
  #     methods: [:get]
  # end

  # allow do
  #   origins 'https://daggettcontrol.com'
  #   resource '/contact_forms',
  #     headers: :any, 
  #     methods: [:post]
  #   resource '*', 
  #     headers: :any, 
  #     methods: [:get]
  # end

  allow do
    origins 'http://localhost:5173'
    resource '/contact_forms',
      headers: :any, 
      methods: [:post]
    resource '*', 
      headers: :any, 
      methods: [:get]
  end

  allow do
    origins 'http://localhost:4173'
    resource '/contact_forms',
      headers: :any, 
      methods: [:post]
    resource '*', 
      headers: :any, 
      methods: [:get]
  end

end