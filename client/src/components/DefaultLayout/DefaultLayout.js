import React from 'react';
import { Menu, Dropdown, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function DefaultLayout(props) {
  const menuAdmin = (
    <Menu>
      <Menu.Item>
        <Link to="/datepicker">
          DatePicker
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/userbookings">
          Bookings
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/auth/admin">
          Admin
        </Link>
      </Menu.Item>
      <Menu.Item>
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
                <div style={{ color: 'white' }}>
                  <Link to="/datepicker">DatePicker</Link>
                </div>
              </h1>

              <Dropdown overlay={menuAdmin} placement="bottomCenter">
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
