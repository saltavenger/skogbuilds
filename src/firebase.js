import 'whatwg-fetch';

let firebaseCache

const getFirebase = firebase => {
  if (firebaseCache) {
    return firebaseCache
  }

  fetch('/__/firebase/init.json').then(async response => {
    firebase.initializeApp(await response.json());
  });

  firebaseCache = firebase
  return firebase
}

export default getFirebase
