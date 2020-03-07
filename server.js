const express = require('express');

const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schema')
const resolvers = require('./resolver')
const models = require('./models')

const server = new ApolloServer({ typeDefs, resolvers, context: { models },
engine: {
    debugPrintReports: true,
  } });
const app = express();
server.applyMiddleware({ app });
models.sequelize.authenticate();

models.sequelize.sync();

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)

);