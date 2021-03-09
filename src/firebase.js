const config = {
  apiKey: "AIzaSyBjZnlptofO_URXmC9e6z3nZPUkXLhFIK0",
  authDomain: "skogbuilds.firebaseapp.com",
  projectId: "skogbuilds",
  storageBucket: "skogbuilds.appspot.com",
  messagingSenderId: "489885208087",
  appId: "1:489885208087:web:9f98a46e75d1862bced652",
  measurementId: "G-7S9NJC0BCM"
}

let firebaseCache

const getFirebase = firebase => {
  if (firebaseCache) {
    return firebaseCache
  }

  firebase.initializeApp(config)
  firebaseCache = firebase
  return firebase
}

export default getFirebase
