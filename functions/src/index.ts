import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
//
import {homegraph, verify} from "./smarthome";

const app = express();
app.use(cors({origin: true}));

exports.query = functions.https.onCall(async (data, context) => {
  const {jwt} = data;
  functions.logger.log("Hi there");
  const payload = await verify(jwt);
  const userid = payload? payload["sub"] : undefined;
  if (userid) {
    const res = await homegraph.devices.query(
        {requestBody: {agentUserId: userid, inputs: []}});
    functions.logger.log(`res: ${res}`);
    return res;
  } else {
    return new Error("User id not found.");
  }
});

exports.app = functions.https.onRequest(app);

// exports.query = functions.https.onRequest((request, response) => {
//   const {jwt} = request.body;
//   console.log(request);
//   console.log("Hello");
//   verify(jwt).then( (payload) => {
//     const userid = payload? payload["sub"] : undefined;
//     if (userid) {
//       const res = homegraph.devices.query(
//           {requestBody: {agentUserId: userid, inputs: []}});
//       console.log(res);
//       response.send(res);
//     }
//   });
//   response.send("Hello from Firebase!");
// });
