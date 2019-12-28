import { join } from 'path'
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas'

const resolversArray = fileLoader(join(__dirname, './'))
const resolvers = mergeResolvers(resolversArray, { all: true })

export default resolvers
