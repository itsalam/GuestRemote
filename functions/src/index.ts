import * as functions from "firebase-functions";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
import { homegraph, verify } from './smarthome';

export const smartHomeSync = functions.https.onRequest((request, response) => {
    const { jwt } = request.body;
    verify(jwt).then( payload => {
        const userid = payload? payload['sub'] : undefined;
        if (userid){
            homegraph.
        }
    });
    functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
