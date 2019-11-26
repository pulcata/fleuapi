'user strict'

const admin =  require('firebase-admin')

const serviceAccount = require('../fleu-firebase-admin.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fleu-258708.firebaseio.com"
});

module.exports = admin