import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCMg2yiREN9qLcK17u6gwWsY0-QBzKR0g4",
  authDomain: "geostrata-a6a62.firebaseapp.com",
  projectId: "geostrata-a6a62",
  storageBucket: "geostrata-a6a62.firebasestorage.app",
  messagingSenderId: "5759918453",
  appId: "1:5759918453:web:068aeb1ff690d42eaca01c"
};

let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  throw new Error(`Firebase initialization failed: ${error.message}`);
}

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  client_id: '490043682777-i9u1sisad66hkddlep7sd7ldn5d4kceq.apps.googleusercontent.com',
});

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const signOutUser = () => signOut(auth);
export const onAuthStateChange = (callback) => onAuthStateChanged(auth, callback);
