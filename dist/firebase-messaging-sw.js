"use strict";
importScripts(
  "https://www.gstatic.com/firebasejs/11.0.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging-compat.js"
);
var wigzoConf = {
  host: "https://tracker.wigzopush.com/",
  whitelabelHost: "https://tracker.wigzopush.com/",
  beam_host: "https://services.wigzopush.com/push/",
  orgtoken: "ixsA_0VyS1GEmAJEW4j3pQ",
  orgIcon: "https://storage.googleapis.com/media.wigzo.com/uploads/ixsA_0VyS1GEmAJEW4j3pQ/icon/8367b746-7d8f-4f42-a0e9-a28629ed8ba6.jpg?_=2024-11-20T07:34:56.137Z",
  failSafeTitle: "Snap! We could not fetch the notification",
  failSafeBody: "Due to some error the notification that was sent could not be displayed.",
  failSafeUrl: "https://app-engage.shiprocket.in/"
};
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
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  var _a, _b, _c;
  const notificationTitle = (_a = payload == null ? void 0 : payload.notification) == null ? void 0 : _a.title;
  const notificationOptions = {
    body: (_b = payload == null ? void 0 : payload.notification) == null ? void 0 : _b.body,
    icon: (_c = payload == null ? void 0 : payload.notification) == null ? void 0 : _c.image
  };
  console.log("Messaged is logged ");
  const pushReceivedTracking = fetch(
    wigzoConf.beam_host + "v3/track/received?orgtoken=" + wigzoConf.orgtoken + "&campaign_id=data.options.data.campaign_id"
  ).then(function(response) {
    return true;
  });
  pushReceivedTracking();
  self.registration.showNotification(notificationTitle, notificationOptions);
});
self.addEventListener("notificationclick", async (event) => {
  console.log("notification is clicked");
  url = event.notification.data.url;
  pushOpenTracking = fetch(
    wigzoConf.host + "push/v3/track/open?orgToken=" + wigzoConf.orgtoken + "&campaignId=" + event.notification.data.campaign_id
  ).then(function(response) {
    return true;
  });
  event.notification.close();
});
self.addEventListener("notificationclose", async (event) => {
  event.notification.data;
  console.log("Notification closed:", event.notification);
});
