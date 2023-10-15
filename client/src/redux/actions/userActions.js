import axios from 'axios';
import {message} from 'antd';

export const userLogin = reqObj => async dispatch => {
  dispatch ({type: 'LOADING', payload: true});

  try {
    const response = await axios.post ('/api/users/login', reqObj);
    localStorage.setItem ('user', JSON.stringify (response.data));
    dispatch ({type: 'GET_USERS', payload: response.data});
    message.success ('Login Success');
    dispatch ({type: 'LOADING', payload: false});
    setTimeout (() => {
      window.location.href = '/';
    }, 500);
  } catch (error) {
    message.error ('Something went wrong, really?');
    dispatch ({type: 'LOADING', payload: false});
  }
};

export const userRegister = reqObj => async dispatch => {
  dispatch ({type: 'LOADING', payload: true});

  try {
    await axios.post ('/api/users/register', reqObj);
    message.success ('Registration successful');

    setTimeout (() => {
      window.location.href = '/login';
    }, 500);
    dispatch ({type: 'LOADING', payload: false});
  } catch (error) {
    message.error ('Something went wrong!');
    dispatch ({type: 'LOADING', payload: false});
  }
};
