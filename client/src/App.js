// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';
import Home from './pages/Home';
import BookingCar from './pages/BookingCar';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';
import UserBookings from './pages/UserBookings';
import AddCar from './pages/AddCar';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';
import ErrorPage from './pages/ErrorPage';

// ### State Drilling
import {useSelector} from 'react-redux';
import { UsersRoute } from './routers/UsersRoute';
import {AdminRoute}  from './routers/AdminRoute';
import WelcomePage from './pages/WelcomePage/WelcomePage';

function App () {
  const {users} = useSelector (state => state.usersReducer);

  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route users={users} path="/" exact component={WelcomePage} />
          <AdminRoute users={users} path="/datepicker" exact component={Home} />
          <UsersRoute users={users} path="/datepicker" exact component={Home} />
       
          <AdminRoute users={users} path="/booking/:carid" exact component={BookingCar} />
          <AdminRoute users={users} path="/userbookings" exact component={UserBookings} />
        
          <UsersRoute users={users} path="/userbookings" exact component={UserBookings} />
          <AdminRoute users={users} path="/addcar" exact component={AddCar} />
          <AdminRoute users={users} path="/editcar/:carid" exact component={EditCar} />

          <AdminRoute users={users} path="/auth/admin" exact component={AdminHome} >
          </AdminRoute>
        
          <UsersRoute users={users} path="/user/admin" exact component={ErrorPage} >
            <Redirect to="/" />
          </UsersRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

// ### First AdminRoute

// export const AdminRoute = (props, users) => {
//   console.log("line:110", props);
//   console.log("line:111", props.users?.role);
//   if (
//     localStorage.getItem('user')
//    && 
//    props.users?.role === 'admin'  
//    )
//    {
//     return <Route {...props} />;
//   }
  
//   else {
//     // return <Route {...props} />;
//     return <Redirect to="/login" />;
//   }
// }

// ### Second Protected Route

// export const ProtectedRoute2 = (props, users) => {
//   console.log("line:110", props);
//   console.log("line:111", props.users?.role);
//   if (
//     localStorage.getItem('user')
//    && 
//    props.users?.role === 'user'  
//    )
//    {
//     return <Route {...props} />;

//   } else {
//     return <Redirect to="/login" />;
//   }
// }
