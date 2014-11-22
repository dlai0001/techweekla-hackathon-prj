module V1
  class Dogs < Grape::API
    namespace "dogs"
    before(&:authenticate!)

    desc "List shelters of liked dogs"
  end
end
