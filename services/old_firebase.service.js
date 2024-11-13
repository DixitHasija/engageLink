// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const setupFirebase = async () => {
  debugger
  const a = await import('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
  const b = await import('https://www.gstatic.com/firebasejs/7.15.0/firebase-analytics.js');
  const c = await import('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');
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
  debugger;
  // <script src="https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js"></script>
  //   <script src="https://www.gstatic.com/firebasejs/7.15.0/firebase-analytics.js"></script>
  //   <script src="https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js"></script>
  // <script>
  // Web app's Firebase configuration
  

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

   const messaging = firebase.messaging();

    // Register service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/firebase-messaging-sw2.js')
        .then(function(registration) {
            console.log('Service Worker registered with scope:', registration.scope);

            // Use the service worker for Firebase messaging
            messaging.useServiceWorker(registration);

            // Request permission and get token
            messaging.requestPermission()
            .then(function () {
                // MsgElem.innerHTML = 'Notification permission granted.'
                console.log('Notification permission granted.');

                // Get the token
                return messaging.getToken();
            })
            .then(function(token) {
                // TokenElem.innerHTML = 'token: ' + token;
              console.log('Token:', token);
              console.log('wigzo:', window.wigzo);
              

            })
            .catch(function (err) {
                // ErrElem.innerHTML = ErrElem.innerHTML + '; ' + err;
                console.log('Unable to get permission to notify.', err);
            });

            // Handle incoming messages
            messaging.onMessage(function(payload) {
                console.log('Message received. ', payload);
                // NotisElem.innerHTML = NotisElem.innerHTML + JSON.stringify(payload);

                const response = payload.notification ? payload.notification : payload.data;

                const notificationTitle = response.title;
                const notificationOptions = {
                    body: response.body,
                    icon: response.icon,
                    image: response.image
                };

                var notification = new Notification(notificationTitle, notificationOptions);
            });
        })
        .catch(function(err) {
            console.log('Service Worker registration failed:', err);
        });
    } else {
        console.log('Service workers are not supported in this browser.');
    }
}
export { setupFirebase }
