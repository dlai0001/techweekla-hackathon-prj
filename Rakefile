require 'rake'
require 'yaml'

task :run do
  pids = [
    spawn("cd backend && EMBER_PORT=4900 rails s -p 3900"),
    spawn("cd frontend && ./node_modules/.bin/ember server --port=4900 --proxy-port=3900"),
  ]

  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end

  loop do
    sleep 1
  end
end

task :deploy do
  sh 'git subtree push -P backend heroku master'
  sh 'heroku run rake db:migrate'
end

task :deploy_front do
  sh 'git subtree push -P frontend heroku-front master'
end

namespace :db do
  task :dump do
    db = YAML.load(File.read('backend/config/database.yml'))['development']['database']
    dump="backend/tmp/db-#{Time.now.to_i}.dump"

    sh "heroku pgbackups:capture --expire"
    sh "curl -o #{dump} `heroku pgbackups:url`"
    sh "dropdb #{db}"
    sh "createdb #{db}"
    sh "pg_restore --verbose --clean --no-acl --no-owner -d #{db} #{dump}"
    sh "rm -f #{dump}"
  end
end

