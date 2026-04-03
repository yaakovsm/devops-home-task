# Apples Counter

A simple containerized web application built with Node.js and MongoDB.

The application reads the number of apples from MongoDB and displays it on a simple HTML page, along with small apple icons.

## Architecture

- Node.js web application
- MongoDB database
- Docker containers
- Docker Compose orchestration
- Linux-based container runtime

Each component runs in its own container.

## Data Seeded into MongoDB

The database is initialized automatically with the required dataset during first startup.

## Run the Project

```bash
./infra/scripts/up.sh
```
Then open:
http://localhost:3000

## Verify
```bash
./infra/scripts/verify.sh
```

## Reset and Provision from Scratch
```bash
./infra/scripts/reset.sh
```

## Stop the project
```bash
./infra/scripts/down.sh
```

## Project Structure
- ```app/``` - Node.js application source code
- ```db/init/``` - MongoDB initialization script
- ```infra/scripts/``` - helper scripts
- ```docs/``` - diagrams and screenshots
- ```docker-compose.yml``` - orchestration

## Expected Result

The page should display:

- a Hello World heading
- the apples count from MongoDB
- one apple icon per apple in the database