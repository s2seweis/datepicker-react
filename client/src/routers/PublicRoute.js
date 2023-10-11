import React from 'react';
import { Redirect, Route, BrowserRouter, Router, Switch } from 'react-router-dom';


export const PublicRoute = (props, users) => {
    console.log("line:110", props);
    console.log("line:111", props.users?.role);

    
    if (
     props.users?.role === undefined   
     )
     {
      return <Route {...props} />;
    }
    
    
    
    // else {
    //   // return <Route {...props} />;
    //   return <Redirect to="/login" />;
    // }
  }