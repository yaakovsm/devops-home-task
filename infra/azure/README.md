# Azure Bonus Deployment

This bonus deployment uses Azure Container Apps, Azure Container Registry, and GitHub Actions.

## Architecture

- GitHub Actions builds the application image
- The image is pushed to Azure Container Registry
- Azure Container Apps runs the application publicly
- MongoDB runs as a sidecar container inside the same Container App
- Ingress is enabled on the Container App and exposes the application over HTTPS

## CI/CD Flow

1. Code is pushed to GitHub
2. GitHub Actions logs in to Azure
3. GitHub Actions builds the Docker image
4. The image is pushed to Azure Container Registry
5. The Container App is updated with the new image

## Load Balancer

Azure Container Apps ingress provides the public entrypoint for the application and handles incoming traffic to the app.

## Health Check

The application exposes:

- `/health`

## Public URL

The application is available through the Azure Container App FQDN.

## Notes

This bonus deployment keeps the original task architecture:
- Node.js
- MongoDB
- Containers

The local Docker Compose setup is still available for local provisioning and testing.