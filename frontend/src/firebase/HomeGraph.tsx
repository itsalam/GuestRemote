import {HttpsCallable, httpsCallable} from "firebase/functions";
import {JWTToken} from "./CredentialHandler";
import {functions} from "./index";

/**
 * Creates a button to call the query function for Homegraph API
 * @param {props} props Required: JSX token
 * @return {Promise} Promise of the token Payload object with useriD
 */
export function QueryButton() {
  const callQueryFunction: HttpsCallable<any, any> =
    httpsCallable(functions, "query");

  // eslint-disable-next-line max-len
  const onClick: React.MouseEventHandler<HTMLButtonElement> = () => callQueryFunction({jwt: JWTToken})
      .then((res) => {
        const {data} = res;
        console.log({res, data});
      });

  return <button onClick={async (e) => onClick(e)}></button>;
}
