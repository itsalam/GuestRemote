function handleCredentialResponse(
  response: google.accounts.id.CredentialResponse
) {
  console.log("Encoded JWT ID token: " + response.credential);
}

window.onload = function () {
  google.accounts.id.initialize({
    client_id: "491780931767-oohtjepvj9hk5prqicv3akh154cg16m7.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });
  const signInButton = document.getElementById("buttonDiv");
  if (signInButton) {
    google.accounts.id.renderButton(
        signInButton,
      { type: 'standard', theme: "outline", size: "large" } // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  } else {
    console.error("Sign in button not found, google auth creds unavail. ");
  }
};

export {}