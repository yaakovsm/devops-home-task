#!/usr/bin/env bash
set -e

echo "Checking running containers..."
docker compose ps

echo
echo "Checking application response..."
curl -s http://localhost:3000