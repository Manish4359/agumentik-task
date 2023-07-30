import React, { useRef } from 'react'
import { setCurrentAdmin } from '../redux/admin.actions';
import { connect } from "react-redux";

function Signin({setCurrentAdmin}) {
    const passRef=useRef();
    const emailRef=useRef();
    
    const handleSignIn=(e)=>{
        e.preventDefault();

        const email=emailRef.current.value
        const password=passRef.current.value

        //console.log(email,password)
        
        setCurrentAdmin({email,password})
    }
  
    return (
    <form>
        <label id='email'>email:</label>
        <input type='text' ref={emailRef} placeholder='enter your email'/>
        <br/>
        <label id='password'>password:</label>
        <input type='password' ref={passRef} placeholder='enter your password'/>
        <button onClick={handleSignIn}>Sign in</button>
    </form>
  )
}

const mapStateToProps = state => ({
    admin: state.admin
  })
  
const mapDispatchToProps = dispatch => ({
    setCurrentAdmin: admin => dispatch(setCurrentAdmin(admin))
  })
  
  
export default connect(mapStateToProps,mapDispatchToProps)(Signin)