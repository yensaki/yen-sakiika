import firebase from 'firebase'

const config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
}

try {
    console.log("initialize")
    firebase.initializeApp(config)
} catch {
    console.log("error")
}
let fireStore = firebase.firestore()
export default fireStore
