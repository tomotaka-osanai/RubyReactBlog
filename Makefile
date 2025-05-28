up:
		docker compose up -d --build

down:
		docker compose down

migrate:
		docker compose exec web rails db:migrate

seed:
		docker compose exec web rails db:seed

setup:
		npm install
		bundle install
		make up
		make migrate
		make seed
