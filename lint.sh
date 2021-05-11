cd node/
[ -d node_modules] && rn -rf node_modules
yarn cache clean
yarn --frozen-lockfile
yarn lint