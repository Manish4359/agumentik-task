import React from 'react'
import Signin from '../signin/signin'
import { connect } from "react-redux";
import Dashboard from '../dashboard/dashboard';

function Admin({admin}) {


  return (
    
    <div>
      {!admin?<Signin />:<Dashboard/>}
    </div>
  )
}


const mapStateToProps = state => ({
  admin: state.admin
})



export default connect(mapStateToProps)(Admin)