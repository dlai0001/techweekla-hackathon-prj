class API < Grape::API
  prefix "api"
  version 'v1', using: :path

  if Rails.env.production?
    rescue_from :all do |e|
      error_response({ message: e.message })
    end
  end

  rescue_from ActiveRecord::RecordNotFound do |e|
    error_response message: "Not found", status: 404
  end

  format :json
  default_error_formatter :json

  helpers APIHelpers
  mount V1::Dogs

  add_swagger_documentation api_version: "v1", hide_format: true, hide_documentation_path: true
end
