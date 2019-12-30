import Sequelize from 'sequelize-mock'
import Post from '../post.model'

const sequelize = new Sequelize()
const DataTypes = sequelize.Sequelize
const model = Post(sequelize, DataTypes)
const schema = model._defaults
describe('#Postmodel', () => {
  it('should have correct model name', () => {
    expect(model.name).toBe('Post')
  })
  it('should match the schema', () => {
    expect(schema).toEqual({
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4()
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      readingTime: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '3 minutos'
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      context: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      language: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'es'
      },
      image: {
        type: DataTypes.STRING
      },
      published: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    })
  });
})
