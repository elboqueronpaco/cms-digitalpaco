import auth from '../../lib/auth'
export default {
  Query: {
    getUsers: (parent, args, { models }) => {
      return models.User.findAll({
        include: [{
          model: models.Post,
          as: 'posts'
        }]
      })
    }
  },
  Mutation: {
    singup: (parent, { input }, { models }) => models.User.create({ ...input }),
    singin: (parent, { input: { email, password } }, { models }) => auth(email, password, models)
  }
}
