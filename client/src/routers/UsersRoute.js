import React from 'react';
import { Redirect, Route, BrowserRouter, Router, Switch } from 'react-router-dom';


export const UsersRoute = (props, users) => {
    // console.log("line:110", props);
    // console.log("line:111", props.users?.role);

    
    if (
      localStorage.getItem('user')
     && 
     props.users?.role === 'user'  
     )
     {
      return <Route {...props} />;
    }
    
    
    
    // else {
    //   // return <Route {...props} />;
    //   return <Redirect to="/login" />;
    // }
  }