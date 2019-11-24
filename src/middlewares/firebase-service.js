'user strict'

import admin from 'firebase-admin'

import serviceAccount from '../fleu-firebase-admin.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fleu-258708.firebaseio.com"
});

export default admin