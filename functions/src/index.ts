import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const sendQuote = functions.https.onRequest(async(request, response) => {
    await admin
        .firestore()
        .collection("mail")
        .add({
            to: "info@skogbuilds.com",
            from: request.body.email,
            replyTo: request.body.email,
            message: {
                subject: "Quote for project",
                html: `Name: ${request.body.name}<br />
                    Phone: ${request.body.phone}<br />
                    Contact Preference: ${request.body.contactType}<br />
                    Project Description: ${request.body.description}`,
            },
        })
        .then(() => {
            response.status(200).send();
        })
        .catch((err) => {
            response.status(500).send(err);
        });
    return;
});
