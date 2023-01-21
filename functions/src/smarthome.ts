import { OAuth2Client, TokenPayload } from 'google-auth-library';
import google from 'googleapis';
import * as functions from 'firebase-functions';

const CLIENT_ID = '491780931767-oohtjepvj9hk5prqicv3akh154cg16m7.apps.googleusercontent.com;'

export const homegraph = google.homegraph("v1");
const authClient = new OAuth2Client(CLIENT_ID);

export async function verify(token: string) : Promise<TokenPayload | undefined> {
  const ticket = await authClient.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
    // Or, if multiple clients access the backend:
    //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  google.options({auth: authClient});
  return ticket.getPayload();
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
}


