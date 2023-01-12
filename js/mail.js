const firebaseConfig = {
    apiKey: "AIzaSyD84R13GHDx7fmvJPasMUm52im32wMvp4s",
    authDomain: "about-me-cdbfd.firebaseapp.com",
    databaseURL: "https://about-me-cdbfd-default-rtdb.firebaseio.com",
    projectId: "about-me-cdbfd",
    storageBucket: "about-me-cdbfd.appspot.com",
    messagingSenderId: "190761217483",
    appId: "1:190761217483:web:ff4510237bb28130569a4e"
  };
//intialize firebase
  firebase.initializeApp(firebaseConfig);

//referance database
  var contactFormDB = firebase.database().ref('contactForm');

  document.getElementById('contactForm').addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var emailid = getElementVal('emailid');
    var msgContent = getElementVal('msgContent');

    saveMessages(name, emailid, msgContent);

    alert("Thank You !\nYour message sent successfully");
    document.getElementById('contactForm').reset();
  }

  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name : name,
        emailid : emailid,
        msgContent : msgContent,
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };