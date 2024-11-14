
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

debugger
const firebaseConfig =  {
  apiKey: "AIzaSyCH7S8Nj23Lm9vS8svRZT_Ua8QVZ8bYgbY",
  authDomain: "test-push-wigzo.firebaseapp.com",
  projectId: "test-push-wigzo",
  storageBucket: "test-push-wigzo.firebasestorage.app",
  messagingSenderId: "833748812904",
  appId: "1:833748812904:web:55371396d146e8d7c967dd",
  measurementId: "G-7SQ52GWYRV",
  vapidKey: "BGDy-d_jQo6a-Ju4scmfMeCzoTVtjEI41p7_ZmmrO3JnGs73r_ghVhYEeiCh2wVv6zCJsnL7fpxV27c5RuzjWGE"
};
            
// const firebaseConfig = {
//     apiKey: "AIzaSyCH7S8Nj23Lm9vS8svRZT_Ua8QVZ8bYgbY",
//     authDomain: "test-push-wigzo.firebaseapp.com",
//     projectId: "test-push-wigzo",
//     storageBucket: "test-push-wigzo.appspot.com",
//     messagingSenderId: "833748812904",
//     appId: "1:833748812904:web:55371396d146e8d7c967dd",
//     measurementId: "G-7SQ52GWYRV"
// };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  // Customize notification here
  const notificationTitle = payload?.notification?.title;
  const notificationOptions = {
    body: payload?.notification?.body,
    icon:payload?.notification?.image
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});