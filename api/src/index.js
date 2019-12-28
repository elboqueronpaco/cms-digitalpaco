import { ApolloServer } from 'apollo-server'
import { $serverPort } from '../config'

// Models
import models from './models'

import schema from './graphql/index'

// Apollo Server
const apolloServer = new ApolloServer({
  schema,
  context: {
    models
  }
})

// Running Apollo Server
const alter = true
const force = false
models.sequelize.sync({ alter, force }).then(() => {
  apolloServer.listen($serverPort())
    .then(({ url }) => console.log(`Running on ${url}`))
})
