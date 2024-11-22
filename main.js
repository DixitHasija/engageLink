import { setupFirebase } from "./services/firebase.service";

// import { setupFirebase } from "./old_firebase.service";
// Call the function to initialize Firebase
// import { initializeApp } from 'firebase/app';
// index.js
const loadServiceWorkerAndSetupFirebase = (swPath) => {
  swPath ? swPath : '/apps/wigzo/fcm_service_worker.js?orgtoken=ixsA_0VyS1GEmAJEW4j3pQ';
  //     if ('serviceWorker' in navigator) {
  // //   window.addEventListener('load', () => {
  //     navigator.serviceWorker.register('./dist/firebase-messaging-sw.js')
  //       .then((registration) => {
  //           console.log('Service Worker registered with scope:', registration.scope);
  setupFirebase(swPath);
  
  //       })
  //       .catch((error) => {
  //         console.error('Service Worker registration failed:', error);
  //       });
  // //   });
  // }
};

window.wigzo_en = {
  setupFirebase: loadServiceWorkerAndSetupFirebase,
};

// export {initializeApp as firebase}
