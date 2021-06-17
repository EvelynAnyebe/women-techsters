import { useState, useRef, useContext } from "react";
import Button from "../components/button";
import {AppContext} from './../components/StateProvider';
import {useHistory} from 'react-router-dom';

function Login() {
  const [erroMessage, setErrorMessage] = useState("");

  //using context
  const { setState }=useContext(AppContext);

  const history=useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  

  const login=(e)=>{
    e.preventDefault();
    const email=emailRef.current.value;
    const password=passwordRef.current.value;

    if(email.indexOf("@")===-1 || email.indexOf(".")===-1  || password.length<8 ){
        setErrorMessage("Please provide a valid email and password");
        return false;
    }

    // const user=localStorage.getItem("user");
    // if(email!==user.email || password!==user.password){
    //     setErrorMessage("Invalid account");
    // }

   // set isLoggedIn is state
    setState(prev=>{
        return{
            ...prev,
            isLoggedIn: true
        }
    });

    // redirect dashboard
    history.push('/home');
    
  }

  return (
    <div>
      <form onSubmit={login}>
          { erroMessage ? (<span style={{color:"red"}}>{erroMessage}</span>) : "" }
          <br/>
        <input
          type="email"
          placeholder="email"
          name="email"
          id="email"
          required
          ref={emailRef}
        />
        <br/>
        <input
          type="password"
          placeholder="password"
          name="password"
          id="email"
          required
          ref={passwordRef}
        />
        <br/>
        <Button value="Login" btnClass="btn" type="submit" />
      </form>
    </div>
  );
}

export default Login;
