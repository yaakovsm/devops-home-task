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

## Bonus: Azure CI/CD Deployment

The project also includes a cloud deployment bonus implemented on Azure.

### Bonus Components

- Azure Container Registry for image storage
- Azure Container Apps for application hosting
- GitHub Actions for CI/CD
- Public ingress for external access
- MongoDB sidecar container inside the Container App

### CI/CD

A GitHub Actions workflow builds the Docker image, pushes it to Azure Container Registry, and updates the Azure Container App.

### Load Balancer

Azure Container Apps ingress is used as the public application entrypoint and handles incoming traffic to the deployed application.

### Bonus Files

- `.github/workflows/azure-containerapp.yml`
- `infra/azure/containerapp/containerapp.yaml`
- `infra/azure/README.md`
- `docs/diagrams/architecture-azure.md`