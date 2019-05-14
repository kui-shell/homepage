#!/usr/bin/env bash

# Exit on errors

set -o nounset
set -o errexit

# Stop version validation

ibmcloud config --check-version=false

# Log in into IBM Cloud Container Service

ibmcloud login -g 'IBM RESEARCH PRO' -r us-south
ibmcloud cr login

# Build image and push

gatsby build
docker build -t kui-landing .
docker tag kui-landing us.icr.io/kui-shell/kui-landing:1
docker push us.icr.io/kui-shell/kui-landing:1
