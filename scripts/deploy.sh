#!/usr/bin/env bash

APP="$0"
COMMAND=$1

if [ "$1" = "" ]; then
 echo "
 To deploy, run:
 ./deploy.sh --rollbar [ environment ]

 Example:
 ./deploy.sh --rollbar development
 ./deploy.sh --rollbar production
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
        ENVIRONMENT="$2"
        LOCAL_USERNAME=`whoami`
        REVISION=`git log -n 1 --pretty=format:"%H"`

        curl https://api.rollbar.com/api/1/deploy/ \
          -F access_token=$ACCESS_TOKEN \
          -F environment=$ROLLBAR_ACCESS_TOKEN \
          -F revision=$REVISION \
          -F local_username=$LOCAL_USERNAME
        exit
elif [ "$COMMAND" = "--help" ]; then
	$APP
	exit
fi
