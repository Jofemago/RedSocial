# Mi primer servidor GraphQL con Nodejs

Aqui podras encontrar los paquetes que necesitas para correr
la primera version del servidor GraphQL esta instalacion esta
hecha sobre linux Ubuntu/Debian. [TUTORIAL!!!](https://www.youtube.com/watch?v=DqJGNqtx3Pk&t=1s)

## Dependencias

### 1. Nodejs:

```bash
    	$ sudo apt-get update
    	$ sudo apt-get install nodejs
```

### 2. NPM (Gestor de paquetes):

```bash
	$ sudo apt-get install npm
```
### 3. [YARN](https://yarnpkg.com/lang/en/docs/install/)

### 4. Babel:

	Compilador de javascript

```bash
	yarn add babel-cli babel-preset-env babel-preset-stage-3
```

### 5. Nodemon:

Actualizacion instantanea en nuestro servidor

```bash
	npm install nodemon -g
```

### 6. Express y Apollo-Server:

```bash
	yarn add express body-parser apollo-server-express
```

### 7. GraphQL tools:

```bash
	yarn add graphql-tools
```

### 8. GraphQL !!!:

```bash
	yarn add graphql
```

## Iniciando el servicio

Para iniciar nuestro servidor graphql ejecuto el siguiente comando

```bash
	cd project
	yarn start
```

salida:

```bash
	Running GRAPHQL server ...
```

Y listo en este [link](http://localhost:3000/graphiql) puedes ejecutar las querys por ahora solo { holaMundo }


robomongo cd /usr/local/bin/robomongo/bin
./robomongo
