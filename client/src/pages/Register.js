import React from 'react';
import {Row} from 'antd';
// import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import DefaultLayout from '../components/DefaultLayout';

// import {userRegister} from '../redux/actions/userActions';

import Spinner from '../components/Spinner';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init ();

function Register () {
  // const dispatch = useDispatch ();

  const {loading} = useSelector (state => state.alertsReducer);

  return (
    <DefaultLayout>
      <div className="login">

        {loading && <Spinner />}

        <Row gutter={16} className="d-flex aligin-items-center" />

      </div>
    </DefaultLayout>
  );
}

export default Register;
