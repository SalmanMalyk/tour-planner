// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBeQm9U2-KlC9YcWLL6V3IaZAQoQ20b45A',
  authDomain: 'tour-planner-59a98.firebaseapp.com',
  projectId: 'tour-planner-59a98',
  storageBucket: 'tour-planner-59a98.appspot.com',
  messagingSenderId: '343082342315',
  appId: '1:343082342315:web:4384c9ad7c09400da964ee',
  measurementId: 'G-TXPY7H1B3R',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
