# Iniciar o projeto
$

# Primeira dependencia
$ yarn add express

# Criar pasta src(source)
# criar arquivo server.js

# Instalar o nodemon para desenvolvimento
$ yarn add nodemon -D
# configurar o scripts
 $ "scripts": {
    "dev": "nodemon src/server.js"
  },


# Criar o routes.js, para separar e organizar as rotas

# Iniciar a configuração do mongoDB, caso queira utilizar o node com mySQL pesquisar por Sequelize.
# 1 - No mongo, criar uma cluster
# 2 - Criar um user para ler e escrever e pemitir o acesso de IP de quaisquer local
# 3 - Em cluster, ir em conect, conect with your application, deixar a 3.0, se não der usar a v2.0, após isso adicionar o mongoose ao projeto e importar ele em *server.js*.
$ yarn add mongoose

# 4 - adicionar o mongoose com require, escrever linha mongoose.conect() na *server.js*

# 5 - Ao final da url do mongoose.conect(), passar um objeto depois da virgula
{
  useNewUrlParser: true,
  useUnifiedTopology: true
}

# 6 - Caso não conect, verifique user e senha e também se seu proxy não ésta bloqueando a porta, acesse $$ portquiz.net:porta


# Criar o MVC, dentro de src, criar pastas models e controllers, pois o views será o React, ou seja, separada.
# OBS: Models são tabelas, Schemas. Controllers são

# Dentro de model, criar User.js, começar colocando as informações de quais campos esse user vai ter no banco