import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAuHWIGA-38h5bKA4keyJoN4UPMwfRRHlE',
  authDomain: 'where-s-waldo-clone-44ef4.firebaseapp.com',
  projectId: 'where-s-waldo-clone-44ef4',
  storageBucket: 'where-s-waldo-clone-44ef4.appspot.com',
  messagingSenderId: '578254972132',
  appId: '1:578254972132:web:aa6b00ae310bb0740f78f1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
