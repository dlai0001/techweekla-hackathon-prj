module V1
  class Dogs < Grape::API
    namespace "dogs"

    get do
      { dogs: Dog.all }
    end

    get "random" do
      { dog: Dog.all.sample } # for simple dataset
    end

  end
end
