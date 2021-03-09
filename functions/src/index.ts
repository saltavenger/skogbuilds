import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const sendQuote = functions.https.onCall((data) => {
    return admin
        .firestore()
        .collection("mail")
        .add({
            to: "info@skogbuilds.com",
            from: data.email,
            replyTo: data.email,
            message: {
                subject: "Quote for project",
                html: `<strong>Name:</strong> ${data.name}<br />
                    <strong>Phone:</strong> ${data.phone}<br />
                    <strong>Contact Preference:</strong> ${data.contactType}<br />
                    <strong>Project Description:</strong ${data.description}`,
            },
        })
        .then((result) => {
            return result;
        })
        .catch((err) => {
            throw new functions.https.HttpsError('unknown', err);
        });
});

export const getConfig = functions.https.onCall(() => {
    return functions.config();
});
