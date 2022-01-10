// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	firebase: {
		apiKey: 'AIzaSyBmgtvnfr-WN4oPU9qr-qtBcr4gzWaadZA',
		authDomain: 'sc-ship.firebaseapp.com',
		projectId: 'sc-ship',
		storageBucket: 'sc-ship.appspot.com',
		messagingSenderId: '775851413894',
		appId: '1:775851413894:web:1e7028ab832b1a7f9e9c07',
		measurementId: '${config.measurementId}',
	},
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
