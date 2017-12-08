// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
      apiKey: 'AIzaSyDg4TYDxPBN5wVV941kW_4Cia9PjszPCOw',
      authDomain: 'employee-7c20b.firebaseapp.com',
      databaseURL: 'https://employee-7c20b.firebaseio.com',
      projectId: 'employee-7c20b',
      storageBucket: 'employee-7c20b.appspot.com',
      messagingSenderId: '713846689842'
    }
};
