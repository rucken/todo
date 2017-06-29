#!/usr/bin/env bash

APP="$0"
COMMAND=$1
ENV=""

if [ "$TRAVIS_BRANCH" == "develop" ]; then
  ENV="development"
fi
if [ "$TRAVIS_BRANCH" == "master" ]; then
  ENV="production"
fi

if [ "$1" = "" ]; then
 echo "
 To hooks, run:
 ./hooks.sh --rollbar [ environment ]

 Example:
 ./hooks.sh --rollbar development
 ./hooks.sh --rollbar production
"
 exit
fi

# clean up the location string
if [ "$DIR" = "" ]; then
        DIR="$( cd "$( dirname "$0" )" && pwd )"
elif [ "$DIR" = "./" ]; then
        DIR="$( cd "$( dirname "$0" )" && pwd )"
else
        DIR=$(echo "$DIR" | sed -e 's/\/$//g')
fi

# full commands
if [ "$COMMAND" = "--rollbar" ]; then
        echo "Start request to rollbar..."
        LOCAL_USERNAME=`whoami`
        REVISION=`git log -n 1 --pretty=format:"%H"`
        curl https://api.rollbar.com/api/1/deploy/ \
          -F access_token=$ROLLBAR_ACCESS_TOKEN \
          -F environment=$ENV \
          -F revision=$REVISION \
          -F local_username=$LOCAL_USERNAME
        echo "End request to rollbar."
        exit
elif [ "$COMMAND" = "--all" ]; then
        $APP --rollbar
        exit
elif [ "$COMMAND" = "--help" ]; then
        $APP
        exit
fi
