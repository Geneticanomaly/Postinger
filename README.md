# Postinger

Starting dev environment

-   docker build -f ./dev.Dockerfile -t postinger-dev-postgres .
-   docker compose -f docker-compose.dev.yml up

Access database through the command line

-   docker exec -it "containerId" psql -U the_username the_database
