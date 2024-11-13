import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const setupFirebase = async () => {
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
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
//   apiKey: 'AIzaSyCH7S8Nj23Lm9vS8svRZT_Ua8QVZ8bYgbY',
//   authDomain: 'test-push-wigzo.firebaseapp.com',
//   projectId: 'test-push-wigzo',
//   storageBucket: 'test-push-wigzo.appspot.com',
//   messagingSenderId: '833748812904',
//   appId: '1:833748812904:web:55371396d146e8d7c967dd',
//   measurementId: 'G-7SQ52GWYRV',
// };
// Initialize Firebase

const app = initializeApp(firebaseConfig);
  getAnalytics(app);
  // const messaging = getMessaging();
  const messaging = getMessaging();


  getToken(messaging, {
    vapidKey: firebaseConfig.vapidKey,
  })
    .then((currentToken) => {
      if (currentToken) {
      debugger
      wigzo
        // Send the token to your server and update the UI if necessary
        
      } else {
        debugger;
        // Show permission request UI
        console.log(
          'No registration token available. Request permission to generate one.',
        );
        
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });
  onMessage(messaging, (payload) => {
    const response = payload.notification ? payload.notification : payload.data;

    const notificationTitle = response.title;
    const notificationOptions = {
      body: response.body,
      icon: response.icon,
      image: response.image
    };
    var notification = new Notification(notificationTitle, notificationOptions);
  });
};
export { setupFirebase };
