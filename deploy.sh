#!/usr/bin/env bash

# Exit on errors

set -o nounset
set -o errexit

if [[ $TRAVIS_PULL_REQUEST = "false" ]] 
then
    # Stop version validation

    ibmcloud config --check-version=false

    # Log in into IBM Cloud Container Service

    ibmcloud login -g 'IBM RESEARCH PRO' -r us-south
    ibmcloud ks cluster-config kui
    ibmcloud cr login

    # Build image and push

    docker build -t kui-landing .
    docker tag kui-landing us.icr.io/kui-shell/kui-landing:$TRAVIS_BUILD_NUMBER
    docker push us.icr.io/kui-shell/kui-landing:$TRAVIS_BUILD_NUMBER

    # Deploy to K8s cluster

    if helm upgrade -i kui-landing chart --set image.version=$TRAVIS_BUILD_NUMBER | grep -q 'UPGRADE FAILED'; then
        echo "Error upgrading Helm Chart; Probably due to Tiller versions"
        exit 1
    else
        echo "Helm Chart upgraded!"
    fi 
else
    echo "Nothing to do, exit from deploy.sh"
    exit 0
fi


