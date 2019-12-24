import Sequelize from 'sequelize'
import { $db } from '../../config'

const { database, username, password, dialect } = $db()

const sequelize = new Sequelize(database, username, password, {
  dialect,
  define: {
    underscored: true
  }
})

// Models

const models = {
  Post: sequelize.import('./post.model.js'),
  User: sequelize.import('./user.model.js')
}

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models)
  }
})

models.sequelize = sequelize

export default models
