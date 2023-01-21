let JWTToken: google.accounts.id.CredentialResponse["credential"];

// eslint-disable-next-line max-len
const CLIENT_ID = "491780931767-oohtjepvj9hk5prqicv3akh154cg16m7.apps.googleusercontent.com";

// eslint-disable-next-line require-jsdoc
function handleCredentialResponse(
    response: google.accounts.id.CredentialResponse
) {
  console.log("Encoded JWT ID token: " + response.credential);
  JWTToken = response.credential;
}

window.onload = function() {
  google.accounts.id.initialize({
    client_id: CLIENT_ID,
    callback: handleCredentialResponse,
  });
  const signInButton = document.getElementById("buttonDiv");
  if (signInButton) {
    google.accounts.id.renderButton(
        signInButton,
        {type: "standard", theme: "outline", size: "large"}
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  } else {
    console.error("Sign in button not found, google auth creds unavail. ");
  }
};

export {JWTToken};
