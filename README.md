npm i

.development.env | .production.env {
    APP_NAME=boilerplate
    PUBLIC_URL=http://localhost:3000
    API_URL=https://api.gohardstudy.gq
}

npm run build

docker build -t arziburst/barbarossa_frontend .

docker push arziburst/barbarossa_frontend

<!-- droplet -->

docker pull arziburst/barbarossa_frontend

docker tag arziburst/barbarossa_frontend dokku/frontend

dokku tags:deploy frontend

<!-- Dokku fast docs -->
dokku [module]:[report|help] 

sudo dokku plugin:install https://github.com/dokku/dokku-postgres.git postgres

sudo dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git 

dokku postgres:create db

dokku postgres:[unexpose|expose] db [?port]

dokku apps:create [dokkuContainerName]

dokku postgres:link db [dokkuContainerName]

dokku config:set [dokkuContainerName] [key=value] [key=value]...

dokku domains:[add|remove][?-global] [?dokkuContainerName] [domain]

dokku proxy:ports-[add|remove|clear] [dokkuContainerName] [?http:[port:port]]

dokku letsencrypt [dokkuContainerName]