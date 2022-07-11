import firebase from 'firebase/compat/app';

// Environment Config
import { environment } from '../environments/environment';

const app = firebase.initializeApp(environment.firebaseConfig);
