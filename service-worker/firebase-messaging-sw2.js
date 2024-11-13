
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCH7S8Nj23Lm9vS8svRZT_Ua8QVZ8bYgbY",
    authDomain: "test-push-wigzo.firebaseapp.com",
    projectId: "test-push-wigzo",
    storageBucket: "test-push-wigzo.appspot.com",
    messagingSenderId: "833748812904",
    appId: "1:833748812904:web:55371396d146e8d7c967dd",
    measurementId: "G-7SQ52GWYRV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    // Customize notification here
    const notificationTitle = payload.data.title;
    const notificationOptions = {
        body: payload.data.body,
        icon: '',
        image: ''
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
