import React from 'react';
import { Menu, Dropdown, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './DefaultLayout.css';

function DefaultLayout(props) {
  const menuAdmin = (
    <Menu>
      <Menu.Item key="/datepicker">
        <Link to="/datepicker">
          DatePicker
        </Link>
      </Menu.Item>
      <Menu.Item key="/userbookings">
        <Link to="/userbookings">
          Bookings
        </Link>
      </Menu.Item>
      <Menu.Item key="/auth/admin">
        <Link to="/auth/admin">
          Admin
        </Link>
      </Menu.Item>
      <Menu.Item key="/">
        <Link to="/">
          Intro
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div className="header bs1">
        <Row gutter={16} justify="center">
          <Col lg={20} sm={24} xs={24}>
            <div style={{alignItems:'center'}} className="d-flex justify-content-between">
              <h1 style={{ marginLeft: '15px' }}>
                <div >
                  <Link className="a-link-datepicker" to="/datepicker">Date Picker</Link>
                </div>
              </h1>

              <Dropdown overlay={menuAdmin} placement="bottom">
                <Button style={{ marginRight: '25px' }}>{'Admin'}</Button>
              </Dropdown>

            </div>
          </Col>
        </Row>

      </div>
      <div className="content">{props.children}</div>

    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
