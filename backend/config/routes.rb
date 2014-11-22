Rails.application.routes.draw do
  API.logger Rails.logger
  mount API => '/'
  mount GrapeSwaggerRails::Engine => '/'
end
