const Hashids = require('hashids')
const hashids = new Hashids(process.env.APP_SECRET_SALT, process.env.APP_HASH_LENGTH)

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'user',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
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
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {}
  )

  // https://gist.github.com/JesusMurF/9d206738aa54131a6e7ac88ab2d9084e

  // user.beforeCreate(function(user, options) {
  //   console.log(user.dataValues);
  //   return user.slug = hashids.encode(user.id)
  // })

  user.afterCreate(function(user, options) {
    user.slug = hashids.encode(user.dataValues.id)
    return user.save()
  })

  user.associate = function(models) {
    user.hasMany(models.task, { foreignKey: 'user_id' })
    user.hasMany(models.work, { foreignKey: 'user_id' })
    // associations can be defined here
  }

  return user
}
