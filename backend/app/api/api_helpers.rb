module APIHelpers
  def authenticate!
    current_user || render_unauthorized
  end

  def render_unauthorized
    error! 'Unauthorized', 401, 'WWW-Authenticate' => 'Token realm="Application"'
  end

  def current_user
    @current_user ||= User.find(1) # just hardcode it for now
  end

  def permitted_params
    @permitted_params ||= declared(params, include_missing: false)
  end

  def paginate(relation)
    per_page  = params[:per_page].try(:to_i) || 10
    page      = [params[:page].to_i, 1].max
    paginated = relation.page(page).per(per_page)

    paginated
  end

end
