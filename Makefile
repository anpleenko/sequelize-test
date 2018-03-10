export PROJECT_NAME = sequelize
export DB_NAME = sequelize

default:
	@yarn start

init: req local_settings db test end

local_settings:
	@echo "==> Emitting local development settings module"
	@cp .env.example .env

req:
	@echo "==> Installing requirements"
	@yarn install

db: dropdb createdb migrate loadseed

dropdb:
	@echo "==> Destroying PostgreSQL database $(DB_NAME)"
	./node_modules/.bin/sequelize db:drop

createdb:
	@echo "==> Creating PostgreSQL database $(DB_NAME)"
	./node_modules/.bin/sequelize db:create

migrate:
	@echo "==> Running migrations"
	./node_modules/.bin/sequelize db:migrate

loadseed:
	@echo "==> Loading additional data fixtures"
	./node_modules/.bin/sequelize db:seed:all

test:
	@echo "==> Run tests"

end:
	@echo "==> You can now run development server using 'make' command"

clean:
	rm -rf yarn-error.log
