import uuid from 'uuid';

import getUserInfo from './utils/getUserInfo';
import shrinkImageAsync from './utils/shrinkImageAsync';
import uploadPhoto from './utils/uploadPhoto';

const firebase = require('firebase');
require('firebase/firestore');

const collectionName = 'snack-SJucFknGX';

class Fire {
  constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAQan8_IJ6fY6F8E06FMDKVbWlrdI75mvA',
      authDomain: 'instahamm-b09ce.firebaseapp.com',
      databaseURL: 'https://instahamm-b09ce.firebaseio.com',
      projectId: 'instahamm-b09ce',
      storageBucket: 'instahamm-b09ce.appspot.com',
      messagingSenderId: '716190466061',
    });

    firebase.firestore().settings({ timestampsInSnapshots: true });

    firebase.auth().onAuthStateChanged(async user => {
      if (!user) {
        await firebase.auth().signInAnonymously();
      }
    });
  }
}

Fire.shared = new Fire();
export default Fire;
