import encrypt from '../lib/encrypt'
import createAvatar from '../lib/avatar'

export default (sequelize, { BOOLEAN, STRING, UUID, UUIDV4, ENUM }) => {
  const User = sequelize.define('User', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: UUID,
      defaultValue: UUIDV4()
    },
    username: {
      type: STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: STRING,
      allowNull: false
    },
    email: {
      type: STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Correo electrónico invalido'
        }
      }
    },
    avatar: {
      type: STRING,
      validate: {
        isAlphanumiric: {
          args: true,
          msg: 'El nombre de usuario acepta caracteres alfanumericos'
        }
      }
    },
    privilege: {
      type: STRING,
      defaultValue: 'User'
    },
    active: {
      type: BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    hooks: {
      beforeCreate: user => {
        user.password = encrypt(user.password)
        user.avatar = `https://gavatar.com/avatar/${createAvatar(user.email)}`
      }
    }
  })
  User.associate = models => {
    User.hasMany(models.Post, {
      foreignKey: {
        name: 'userId',
        field: 'user_id'
      },
      as: 'posts'
    })
  }
  return User
}
