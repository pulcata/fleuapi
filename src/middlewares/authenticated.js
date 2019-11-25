'user strict'

import admin from '../middlewares/firebase-service'

export const getAuthToken = (req, res, next) => {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
      req.authToken = req.headers.authorization.split(' ')[1];
    } else {
      req.authToken = null;
    }
    next();
  }
  
  
  export async function checkIfAuthenticated(req, res, next){

    const idToken = req.headers.authorization
    try{
      const decodedToken = await admin.auth().verifyIdToken(idToken)

      if(decodedToken){
        return next()
      }else{
        res.status(401).send({ message: "You are not authorized"})
      }
    }catch{
      res.status(401).send({ message: "You are not authorized"})
    }
  }