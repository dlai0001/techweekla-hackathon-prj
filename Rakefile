require 'rake'

task :deploy do
  sh 'git subtree push -P backend heroku master'
  sh 'heroku run rake db:migrate'
end
