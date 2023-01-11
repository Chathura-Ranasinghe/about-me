const firebaseConfig = {
    apiKey: "AIzaSyDgDgB7Q8dhvtmJkrczth3zHguvfDLCjIA",
    authDomain: "contactform-portfolio-6a68a.firebaseapp.com",
    databaseURL: "https://contactform-portfolio-6a68a-default-rtdb.firebaseio.com",
    projectId: "contactform-portfolio-6a68a",
    storageBucket: "contactform-portfolio-6a68a.appspot.com",
    messagingSenderId: "736669903052",
    appId: "1:736669903052:web:9a3ee536e4132ef4283a69",

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