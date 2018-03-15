const signupUser = require('./signupUser')
const signinUser = require('./signInUser')
const userRoutes = require('./userRoutes')
const checkToken = require('../middlewares/checkToken')

const routes = app => {
  /**
   * send robots.txt file
   */
  app.get('/robots.txt', (req, res) => {
    res.type('text/plain')
    res.send('User-agent: *\nDisallow: /')
  })

  /**
   * login/logout routers
   */
  app.use('/api/signup', signupUser)
  app.use('/api/signin', signinUser)

  /**
   * chnage user info
   */
  app.use('/api/user/change', checkToken, userRoutes)

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
