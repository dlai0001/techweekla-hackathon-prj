module APIHelpers
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
