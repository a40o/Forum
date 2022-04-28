
const firebaseConfig = {
    apiKey: "AIzaSyA7yL3vo-onZEvifskb_OhwF78kZ12_vd8",
    authDomain: "forum-c61a5.firebaseapp.com",
    databaseURL: "https://forum-c61a5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "forum-c61a5",
    storageBucket: "forum-c61a5.appspot.com",
    messagingSenderId: "283393021220",
    appId: "1:283393021220:web:f3474297ee4b21ae34cfb1",
    measurementId: "G-M5WZPM1Y60"
  };

  const com = () => {
    com.firebase.client.ValueEventListener
  }

  
  firebase.initializeApp(firebaseConfig);

// reference your database

document.getElementById("Forum").addEventListener("submit", submitForm);

  function submitForm(e){
      e.preventDefault();

      var name = getElementval('name');
      var threadName = getElementval('themeName');
      var description = getElementval('description');

      console.log(name,description,threadName);
  }

  const getElementval = (id) => {
      return document.getElementById(id).value;
  }