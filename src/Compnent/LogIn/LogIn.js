import React from "react";
import firebase from 'firebase/app'
import "firebase/auth";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { useContext } from "react";
import firebaseConfig from "./firebase.Config";
import google from "./google.png"
import HooksFrom from "./HooksFrom";

const LogIn = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: `/payment` } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email, photoURL } = result.user;
        console.log(result);
        const signedInUser = { name: displayName, email, photoURL };
        setLoggedInUser(signedInUser);

        history.replace(from);
        storeToken();
        sessionStorage.setItem('token', signedInUser.user)
        return signedInUser;
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };


  const storeToken =()=>{
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
      sessionStorage.setItem('token',idToken);
      sessionStorage.setLoggedInUser('emails', loggedInUser.emails)
    }).catch(function(error) {
      // Handle error
    });
  }
  return (
    
<section className="mt-5 p-1">

   <div className="d-flex justify-content-center mt-3">
   </div>
   <div className="d-flex justify-content-center mt-3">
   <h3 style={{align:"center"}}>Login With</h3>
   </div>

      <div className="d-flex justify-content-center mt-3">
      
      <Card style={{ width: "25rem", height: "30rem", align:"center", border:"1px solid gray"}}>
      
        <Card.Body>
        {/* <HooksFrom/> */}

          <div className="d-flex align-items-center ml-4 mt-5 p-1" style={{ height: "3rem", width: "18rem", borderRadius:"2rem", backgroundColor:"white", border:"1px solid gray" }}>
            <img
              style={{ width: "2rem", height: "2rem", marginRight:"2rem", marginLeft:"5px" }}
              src={google}
              alt=""
            />
            <button
              
              style={{ height: "2rem", border: "none", width: "12rem",backgroundColor:"white" }}
              onClick={() => handleGoogleSignIn()}
            >
             Login with Google
            </button>
          </div>
        </Card.Body>
      </Card>
      </div>
      </section>

      
  );
};

export default LogIn;