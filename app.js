(function() {
  

     //get elements
     const txtEmail = document.getElementById('txtEmail');
     const txtPassword = document.getElementById('txtPassword');
     const btn_signin = document.getElementById('btn_signin');
     const btn_signup = document.getElementById('btn_signup');

     //add sign in event
     btn_signin.addEventListener('click', e =>{
         //Get email and password
         const email = txtEmail.value;
         const pass = txtPassword.value;
         const auth = firebase.auth;

         //Sign In
         const promise = auth.signInWithEmailAndPassword(email, pass);
         promise.catch(e => console.log(e.message))
     });

     //Add sign up event
     btn_signup.addEventListener('click', e => {
        //Get email and password
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth;

        //Sign In
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message))
     });

     //Add realtime authentication listener 
     firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);

        } else {
            console.log('not logged in');
        }
     });

}());      
       