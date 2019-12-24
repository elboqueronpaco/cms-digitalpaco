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
      unique: true,
      validate: {
        isAlphanumiric: {
          args: true,
          msg: 'El nombre de usuario acepta caracteres alfanumericos'
        }
      }
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
      allowNull: false
    },
    privilege: {
      type: ENUM,
      values: ['Admin', 'User'],
      defaultValue: 'User'
    },
    active: {
      type: BOOLEAN,
      allowNull: false,
      defaultValue: false
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
