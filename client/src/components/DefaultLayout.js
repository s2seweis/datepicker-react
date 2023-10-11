import React from "react";
import { Menu, Dropdown, Button, Row , Col } from "antd";
import {Link} from 'react-router-dom'




function DefaultLayout(props, users) {


  // console.log("line:108",props );
  // console.log("line:108",props?.users );
  // console.log("line:109",props?.users?.role );
    const user = JSON.parse(localStorage.getItem('user'))








  const menuGuest = (
    <Menu>
        <Menu.Item>
        <a
         
          href="/landing"
        >
          Login
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          
          href="/register"
        >
          Register
        </a>
      </Menu.Item>
      
   
    </Menu>
  );
  const menu = (
    <Menu>
        <Menu.Item>
        <a
         
          href="/"
        >
          Home
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          
          href="/userbookings"
        >
          Bookings
        </a>
      </Menu.Item>
      
      <Menu.Item onClick={()=>{
          localStorage.clear();
          // localStorage.removeItem('user');
          window.location.href='/landing'
      }}>
          <li style={{color:'orangered'}}>Logout</li>
      </Menu.Item>
    </Menu>
  );

  // ###
  const menuAdmin = (
    <Menu>
        <Menu.Item>
        <a
         
          href="/"
        >
          Home
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          
          href="/userbookings"
        >
          Bookings
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
         
          href="/auth/admin"
        >
          Admin
        </a>
      </Menu.Item>
      <Menu.Item onClick={()=>{
          localStorage.clear();
          // localStorage.removeItem('user');
          window.location.href='/login'
      }}>
          <li style={{color:'orangered'}}>Logout</li>
      </Menu.Item>
    </Menu>
  );

  const test = props?.users?.role === "admin" ? menuAdmin :  menu



  




  return (
    <div>
      <div className="header bs1">
          <Row gutter={16} justify='center'>
              <Col lg={20} sm={24} xs={24}>
              <div className="d-flex justify-content-between">
             <h1 ><b><Link to='/' style={{color:'orangered'}}>SheyCars</Link></b></h1>

          {/* <Dropdown overlay={menu} placement="bottomCenter"> */}

          {/* ### */}

        
          
          {/* ### */}          
          {props?.users?.role === 'admin' && (
            <Dropdown  overlay={test} placement="bottomCenter">
          <Button >{user?.username || "Guest"}</Button>
          </Dropdown>
          )}
          {/* ### */}
          {/* ### */}          
          {props?.users?.role === 'user' && (
            <Dropdown  overlay={test} placement="bottomCenter">
          <Button >{user?.username || "Guest"}</Button>
          </Dropdown>
          )}
          {/* ### */}
          {/* ### */}        
            
          {props?.users?.role !==  'admin' && props?.users?.role !== 'user'   && (
            <Dropdown  overlay={menuGuest} placement="bottomCenter">
          <Button >{"Guest"}</Button>
          </Dropdown>
          )}
          {/* ### */}
          
          
  

          

          
        

          
          {/* ### */}



        </div>
              </Col>
          </Row>
        
      </div>
      <div className="content">{props.children}</div>

      
    </div>
  );
}

export default DefaultLayout;