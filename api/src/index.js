import { makeExecutableSchema, ApolloServer } from 'apollo-server'
import { $serverPort } from '../config'

// Models
import models from './models'

// Type Definitions
const typeDefs = `
  type Hello {
    message: String!
  }

  type Query {
    sayHello(name: String!): Hello
  }
`

// Resolvers
const resolvers = {
  Query: {
    sayHello: (_, args) => {
      return {
        message: `Hello ${args.name || 'world'}`
      }
    }
  }
}

// schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

// Apollo Server
const apolloServer = new ApolloServer({
  schema
})
// Running Apollo Server
models.sequelize.sync({ force: true }).then(() => {
  apolloServer.listen($serverPort())
    .then(({ url }) => console.log(`Running on ${url}`))
})
