const Sequelize = require("sequelize");
const sequelize = new Sequelize("postgres://user:password@localhost:4501/data");

const User = sequelize.define("user", {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");

    // force: true will drop the table if it already exists
    User.sync({ force: true }).then(() => {
      // Table created
      return User.create({
        firstName: "John",
        lastName: "Hancock"
      });
    });

    // User.findAll().then(users => {
    //   console.log(users);
    // });
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
