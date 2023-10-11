// import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
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
import { PublicRoute } from './routers/PublicRoute';

function App () {
  const {users} = useSelector (state => state.usersReducer);
  console.log ('line:106', users);

  return (
    <div className="App">

      <BrowserRouter>

        <AdminRoute users={users} path="/" exact component={Home} />
        <UsersRoute users={users} path="/" exact component={Home} />
        {/* <PublicRoute users={users} path="/" exact component={Home} /> */}
        {/* ### */}


        <Route users={users} path="/landing" exact component={Login} />
        <Route users={users} path="/register" exact component={Register} />
        {/* ### */}
        <AdminRoute users={users} path="/booking/:carid" exact component={BookingCar} />
        <AdminRoute users={users} path="/userbookings" exact component={UserBookings} />
        
        <UsersRoute users={users} path="/userbookings" exact component={UserBookings} />
        <AdminRoute users={users} path="/addcar" exact component={AddCar} />
        <AdminRoute users={users} path="/editcar/:carid" exact component={EditCar} />

        <AdminRoute users={users} path="/auth/admin" exact component={AdminHome} >
        {/* <Redirect to="/" /> */}
        </AdminRoute>
        
        <UsersRoute users={users} path="/user/admin" exact component={ErrorPage} >
          <Redirect to="/" />
          </UsersRoute>
        

        <PublicRoute users={users} path="/admin" exact component={ErrorPage} >
        <Redirect to="/" />
        </PublicRoute>


       
        {/* <AdminRoute path="/admin" exact component={AdminHome} /> */}

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




