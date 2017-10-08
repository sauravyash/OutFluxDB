import * as express from 'express';
import mongoGraphql from 'graphql-anywhere-mongodb-express';

const app = express();

...
const mongoUri = process.env.MONGO_URI;
app.use('/graphql', mongoGraphql({
  uri: mongoUri, // Can initialize via mongo URI

  graphiql: true, // Optionally enable graphiql

  // Optional whitelist of collections that can be queried
  whitelist: ['restaurants'],
}));

// Alternatively can pass an existing mongodb connection
// from the official node mongodb driver
app.use('/graphql', mongoGraphql({
  connection: existingConnection,
}));
