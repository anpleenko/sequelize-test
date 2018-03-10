const signupUser = require('./signupUser')

const routes = app => {
  /**
   * send robots.txt file
   */
  app.get('/robots.txt', (req, res) => {
    res.type('text/plain')
    res.send('User-agent: *\nDisallow: /')
  })
  //
  // app.get('/', (req, res) => {
  //   db.user.findAll({order: [['id', 'ASC']], include: [db.task, db.work]}).then(users => {
  //     res.send(users)
  //   })
  // })
  //
  app.use('/api/signup', signupUser)

  /**
   * Error handler
   */
  app.use((err, req, res, next) => {
    const { status = 500, message = 'Server Error', stack } = err
    return res.status(status).render('500', { message, stack })
  })

  /**
   * 404 error
   */
  app.use((req, res) => {
    res.render('404')
  })
}

module.exports = routes
