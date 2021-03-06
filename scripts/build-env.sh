#!/bin/sh

if [ -d dist ] 
then
    file="dist/config.js"
else
    file="config.js"
fi

if [ -z ${GQL_URL+x} ]
then
    echo 'Error! $GQL_URL is required.'
    exit 64
fi


POLKADOT_URL="wss://tfchain.grid.tf/ws"
PROXY_URL="https://gridproxy.grid.tf"
DASHBOARD_URL="https://dashboard.grid.tf/"

case $GQL_URL in
  *"dev"*)
	  PROXY_URL="https://gridproxy.dev.grid.tf"
    POLKADOT_URL="wss://tfchain.dev.grid.tf/ws"
    DASHBOARD_URL="https://dashboard.dev.grid.tf/"
    ;;
  *"test"*)
    PROXY_URL="https://gridproxy.test.grid.tf"
    POLKADOT_URL="wss://tfchain.test.grid.tf/ws"
    DASHBOARD_URL="https://dashboard.test.grid.tf/"
    ;;
  *"qa"*)
    PROXY_URL="https://gridproxy.qa.grid.tf"
    POLKADOT_URL="wss://tfchain.qa.grid.tf/ws"
    DASHBOARD_URL="https://dashboard.qa.grid.tf/"
    ;;
esac

configs="
window.configs = window.configs || {};
window.configs.gql_url = '$GQL_URL';
window.configs.proxy_url = '$PROXY_URL';
window.configs.polkadot_url = '$POLKADOT_URL';
window.configs.version = '$VERSION';
window.configs.dashboard_url = '$DASHBOARD_URL';
"

if [ -e $file ]
then
    rm $file
fi

echo $configs > $file
