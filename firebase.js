var app_firebase = {};
(function(){
            // Your web app's Firebase configuration
            var firebaseConfig = {
              apiKey: "AIzaSyAeoaewFeTU7nV9DAveWZwrWx26u0Fp3jI",
              authDomain: "pizza-app-full-stack-2-525db.firebaseapp.com",
              databaseURL: "https://pizza-app-full-stack-2-525db.firebaseio.com",
              projectId: "pizza-app-full-stack-2-525db",
              storageBucket: "pizza-app-full-stack-2-525db.appspot.com",
              messagingSenderId: "778786474999",
              appId: "1:778786474999:web:a9e76176a4cc6226923cf2"
            };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
          app_firebase = firebase;
})();