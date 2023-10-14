import React from 'react';
import {Row, Col, Input, Form} from 'antd';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../redux/actions/userActions';
import Spinner from '../components/Spinner';

import DefaultLayout from '../components/DefaultLayout';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init ();

function Login () {
  const dispatch = useDispatch ();
  const {loading} = useSelector (state => state.alertsReducer);
  function onFinish (values) {
    dispatch (userLogin (values));

    console.log ('line:3', values);
  }
  return (
    <DefaultLayout>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'aliceblue',
          alignItems: 'center',
        }}
        className="login"
      >
        {loading && <Spinner />}

        <div
          style={{
            width: '300px',
            padding: '30px',
            height: 'fit-content',
            background: 'lightblue',
            color:"black"
          }}
          layout="vertical"
          className="login-form "
          onFinish={onFinish}
        >
          <h1>Datepickers are essential in various scenarios where you need to gather or display date-related information.</h1>
          <hr />
          {/* <Form.Item
              name="username"
              label="Username"
              rules={[{required: true}]}
            >
              <Input />
            </Form.Item> */}
          {/* <Form.Item
              name="password"
              label="Password"
              rules={[{required: true}]}
            >
              <Input />
            </Form.Item> */}

          <button
            onClick={() => {
              window.location.href = '/';
            }}
            className="btn1 mt-2 mb-3"
          >
            go to Datepicker
          </button>

          <br />

          <div style={{marginBottom: '15px'}}>
            {/* <Link  to="/register">Click here to Register</Link> */}
          </div>
          {/* <br style={{marginBottom:"20px"}} /> */}
          {/* <Link   to="/">Check out the Cars</Link> */}

        </div>

        {/* </Row> */}

      </div>
    </DefaultLayout>
  );
}

export default Login;
