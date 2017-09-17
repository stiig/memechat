source 'https://rubygems.org'
ruby '2.4.2'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'pg', '~> 0.18'
gem 'rails', '~> 5.1.0'

gem 'coffee-rails', '~> 4.2'
gem 'figaro'
gem 'jquery-rails'
gem 'puma', '~> 3.7'
gem 'slim-rails'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker', '~> 3.0'

group :development, :test do
  gem 'awesome_print'
  gem 'byebug', platform: :mri
end

group :development do
  gem 'annotate'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'pry-rails'
  gem 'rubocop', require: false
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
