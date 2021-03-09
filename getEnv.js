var firebase = require("firebase/app");
require("firebase/functions");
require("fs");

firebase.initializeApp({
  apiKey: "AIzaSyBjZnlptofO_URXmC9e6z3nZPUkXLhFIK0",
  authDomain: "skogbuilds.firebaseapp.com",
  projectId: "skogbuilds",
  storageBucket: "skogbuilds.appspot.com",
  messagingSenderId: "489885208087",
  appId: "1:489885208087:web:9f98a46e75d1862bced652",
  measurementId: "G-7S9NJC0BCM"
});

const req = firebase.functions().httpsCallable('getConfig');
req().then((resp) => {
  const configVariables = resp.data;
  const fs = require('fs');
  let envs = `CONTENTFUL_SPACE_ID=${configVariables.contentful.spaceid}\nCONTENTFUL_KEY=${configVariables.contentful.key}\nCONTENTFUL_PREVIEW_KEY=${configVariables.contentful.previewkey}`;

  fs.writeFile('.env', envs, (err) => {
      // throws an error, you could also catch it here
    if (err) throw err;
  });
});
