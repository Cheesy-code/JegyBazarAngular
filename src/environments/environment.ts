// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    baseUrl: 'https://jegybazar-3d12d-default-rtdb.firebaseio.com',
    registrationUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp',
    loginUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
    apiKey: "AIzaSyCZ9hqUXrGdd7ha_8AMAvaJ3zSWa8zjqFI",
    authDomain: "jegybazar-3d12d.firebaseapp.com",
    databaseURL: "https://jegybazar-3d12d-default-rtdb.firebaseio.com",
    projectId: "jegybazar-3d12d",
    storageBucket: "jegybazar-3d12d.appspot.com",
    messagingSenderId: "492470088278",
    appId: "1:492470088278:web:c87e26ee61ebd6bd81c1f7",
    measurementId: "G-7CNW2ZFZFC"
  }
};
