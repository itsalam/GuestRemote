import {google, Auth} from "googleapis";
import * as functions from "firebase-functions";

export const homegraph = google.homegraph("v1");
const authClient = new Auth.OAuth2Client(process.env.GOOGLE_CLIENT_ID);

/**
 * Verifies the given JWT Token for googleApis
 * @param {tsring} token JWT token to authorize req
 * @return {Promise} Promise of the token Payload object with useriD
 */
export async function verify(
    token: string
): Promise<Auth.TokenPayload | undefined> {
  const ticket = await authClient.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  google.options({auth: authClient});
  functions.logger.log(`id: ${ticket.getUserId}`);
  functions.logger.log(`payload: ${ticket.getPayload}`);
  return ticket.getPayload();
}
