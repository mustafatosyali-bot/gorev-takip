importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBXU1gjzp3f7FgIqO2QtRros4GxjM4iirE",
  authDomain: "gorev-takip-f68da.firebaseapp.com",
  databaseURL: "https://gorev-takip-f68da-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gorev-takip-f68da",
  storageBucket: "gorev-takip-f68da.firebasestorage.app",
  messagingSenderId: "734379785103",
  appId: "1:734379785103:web:d1aef30462aadf63ede9fa"
});

const messaging = firebase.messaging();

// Background message handler
messaging.onBackgroundMessage(function(payload) {
  console.log('Background message:', payload);
  const { title, body, icon } = payload.notification || {};
  self.registration.showNotification(title || 'GörevTakip', {
    body: body || '',
    icon: icon || './icon-192.png',
    badge: './icon-192.png',
    vibrate: [200, 100, 200],
    data: payload.data || {}
  });
});
