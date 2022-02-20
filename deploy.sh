#!/bin/bash

BUCKET_NAME=$BUCKET_NAME
DISTRIBUTION_ID=$DISTRIBUTION_ID
AWS_PROFILE=$AWS_PROFILE
AnException=100


set -e
trap 'catch $? $LINENO' EXIT
catch() {
  echo "catching!"
  if [ "$1" != "0" ]; then
    # error handling goes here
    echo "Error $1 occurred on $2"
  fi
}

deploy(){

if [[ -z "$BUCKET_NAME" ]]; then
    echo "****** Error Must provide Bucket Name in environment *******" 1>&2
    exit 1
fi

if [[ -z "$DISTRIBUTION_ID" ]]; then
    echo "***** Error Must provide DISTRIBUTION_ID in environment *******" 1>&2
    exit 1
fi

if [[ -z "$AWS_PROFILE" ]]; then
    echo "***** Error Must provide AWS_PROFILE in environment *******" 1>&2
    exit 1
fi


echo "-- ****************** Installing all dependicies ************************ --"
# Install dependencies
npm install --production

echo "--********************* Building project ********************* --"
# Build
npm run build

echo "--************************* Deploying to S3 ********************* --"
# Sync build with our S3 bucket
aws s3 sync build/  --profile $AWS_PROFILE  s3://$BUCKET_NAME

echo "--********************* Invalidating cloudfront cache ******************* --"
# Invalidate cache
aws cloudfront create-invalidation  --profile $AWS_PROFILE  --distribution-id $DISTRIBUTION_ID --paths "/*" --no-cli-pager

echo "--********************** DEPLOYED ********************* --"

}

deploy
