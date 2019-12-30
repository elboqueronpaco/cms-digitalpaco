import Sequelize from 'sequelize-mock'
import { isFunction } from '../../lib/is'
import User from '../user.model'

const sequelize = new Sequelize()
const DataTypes = sequelize.Sequelize
const model = User(sequelize, DataTypes)
const schema = model._defaults

describe('#Usermodel', () => {
  it('should have correct model name', () => {
    expect(model.name).toBe('User')
  })
  it('should match the schema', () => {
    expect(schema).toEqual({
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4()
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
        validate: {
          isAlphanumiric: {
            args: true,
            msg: 'El nombre de usuario acepta caracteres alfanumericos'
          }
        }
      },
      privilege: {
        type: DataTypes.STRING,
        defaultValue: 'User'
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    })
  })
  it('should have beforeCreate hook', () => {
    expect(isFunction(model.options.hooks.beforeCreate)).toBe(true)
  })
  it('should have associate metodo', () => {
    expect(isFunction(model.associate)).toBe(true)
  });
})
