import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

import typeDefs from './schemas'
import resolvers from './resolvers'

const schema =  makeExecutableSchema({
  typeDefs,
  resolvers,
});

const PORT = 3002;

const app = express();

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

//conectar a la base de datos ejecutando una funcion que cuando llamen al pierto imprime en consola
mongoose.connect('mongodb://localhost:27017/redsocial', {useMongoClient: true}).then(
  () => {
    console.log('conectado a Mongo!!');
    app.listen(PORT, () => {
      console.log('Running GRAPHQL server ...');
    });

  }
)
