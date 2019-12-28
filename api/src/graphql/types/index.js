import { join } from 'path'
import { fileLoader, mergeTypes } from 'merge-graphql-schemas'

const typesArray = fileLoader(join(__dirname, './'))

const typeDefs = mergeTypes(typesArray, { all: true })

export default typeDefs
