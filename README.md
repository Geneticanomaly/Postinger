# Postinger

Starting server dev environment
Traverse to the correct directory with cd 
- /Postinger/server

-   docker compose -f docker-compose.dev.yml up --build

Access database through the command line

-   docker exec -it "containerId" psql -U the_username the_database

.env
DATABASE_DEV_URL=postgres://the_username:the_password@db:5432/the_database
