import React, {useState, useEffect} from 'react';
import DefaultLayout from '../components/DefaultLayout';
import {useDispatch, useSelector} from 'react-redux';
import {getAllBookings} from '../redux/actions/bookingActions';
import {Col, Row} from 'antd';
import Spinner from '../components/Spinner';
import moment from 'moment';

function UserBookings () {
  const dispatch = useDispatch ();
  const {bookings} = useSelector (state => state.bookingsReducer);
  const {loading} = useSelector (state => state.alertsReducer);
  const user = JSON.parse (localStorage.getItem ('user'));
  console.log("line:5000", user.role);

  const {users} = useSelector(state=>state.usersReducer)
  console.log("line:107.1", users);

  useEffect (() => {
    dispatch (getAllBookings ());
  }, []);

  return (
    <DefaultLayout users={users}>
      {loading && <Spinner />}
      <h3 className="text-center mt-2">My Bookings</h3>

      <Row justify="center" gutter={16}>
        <Col 
        xl={12} lg={14} md={18} sm={20} xs={18}
        >

          {/* filter and display the bookings of a User */}
          {bookings.filter (o => o.user == user._id).map (booking => {
            return (
              <Row gutter={16} className="bs1 mt-3 text-left">
                <Col 
                // xl={6} lg={6} md={6} sm={6} xs={18}
                >
                  <p><b>{booking.car?.name}</b></p>
                  <p>Total hours : <b>{booking.totalHours}</b></p>
                  <p>Rent per hour : <b>{booking.car?.rentPerHour}</b></p>
                  <p>Total amount : <b>{booking.totalAmount}</b></p>
                </Col>

                <Col 
                lg={8} sm={8} xs={14}
                >
                  <p>Transaction Id : <b style={{wordBreak:"break-word"}}>{booking.transactionId}</b></p>
                  <p>From: <b>{booking.bookedTimeSlots.from}</b></p>
                  <p>To: <b>{booking.bookedTimeSlots.to}</b></p>
                  <p>
                    Date of booking:
                    {' '}
                    <b>{moment (booking.createdAt).format ('MMM DD yyyy')}</b>
                  </p>
                </Col>

                <Col 
                // lg={6} sm={6} xs={18}
                className="text-right"
                style={{display:"flex", alignItems:"center", margin:"auto", justifyContent:"center"}}
                >
                  <img
                    style={{borderRadius: 5}}
                    src={booking.car?.image}
                    height="140"
                    className="p-2"
                  />
                </Col>
              </Row>
            );
          })}

        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default UserBookings;
