const Hashids = require('hashids')
const bcrypt = require('bcrypt-as-promised')

const hashids = new Hashids(process.env.NODE_HASHIDS_SALT, process.env.NODE_HASHIDS_LENGTH)

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'user',
    {
      firstName: {
        type: DataTypes.STRING,
        defaultValue: '',
      },
      lastName: {
        type: DataTypes.STRING,
        defaultValue: '',
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      sex: {
        type: DataTypes.STRING,
        defaultValue: '',
      },
      slug: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {}
  )

  // https://gist.github.com/JesusMurF/9d206738aa54131a6e7ac88ab2d9084e

  user.beforeCreate(async function(user, options) {
    console.log(user.dataValues)

    try {
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(user.dataValues.password, salt)
      return (user.password = hash)
    } catch (e) {
      console.log(e)
    }
  })

  user.afterCreate(function(user, options) {
    user.slug = hashids.encode(user.dataValues.id)
    return user.save()
  })

  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(models.task, { foreignKey: 'user_id' })
    user.hasMany(models.work, { foreignKey: 'user_id' })
  }

  return user
}
