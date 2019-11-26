'user strict'

const admin = require('../middlewares/firebase-service')

exports.checkIfAuthenticated = async function(req, res, next) {

  const idToken = req.headers.authorization
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken)

    if (decodedToken) {
      return next()
    } else {
      res.status(401).send({ message: "You are not authorized" })
    }
  } catch{
    res.status(401).send({ message: "You are not authorized" })
  }
}