import React, { useEffect } from 'react';
import DefaultLayout from '../components/DefaultLayout/DefaultLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBookings } from '../redux/actions/bookingActions';
import { Col, Row } from 'antd';
import Spinner from '../components/Spinner';
import moment from 'moment';

function UserBookings() {
  const dispatch = useDispatch();
  const { bookings } = useSelector(state => state.bookingsReducer);
  const { loading } = useSelector(state => state.alertsReducer);

  const { users } = useSelector(state => state.usersReducer);

  useEffect(() => {
    dispatch(getAllBookings());
  }, []);

  return (
    <DefaultLayout users={users}>
      {loading && <Spinner />}
      <h3 className="text-center mt-2">My Bookings</h3>

      <Row justify="center" gutter={16}>
        <Col
          xl={12} lg={14} md={18} sm={20} xs={18}
        >

          {bookings.map(booking => {
            return (
              <Row key={booking._id} gutter={16} className="bs1 mt-3 text-left">
                <Col
                >
                  <p><b>{booking.car?.name}</b></p>
                  <p>Total hours : <b>{booking.totalHours}</b></p>
                  <p>Rent per hour : <b>{booking.car?.rentPerHour}</b></p>
                  <p>Total amount : <b>{booking.totalAmount}</b></p>
                  <p>
                    Date of booking:
                    {' '}
                    <b>{moment(booking.createdAt).format('MMM DD yyyy')}</b>
                  </p>
                </Col>

                <Col
                  lg={12} sm={12} xs={24}
                >
                  <p><b>Transaction Id :</b><p style={{ wordBreak: 'break-word' }}>{booking.transactionId}</p> </p>
                  <p>From: <b>{booking.bookedTimeSlots.from}</b></p>
                  <p>To: <b>{booking.bookedTimeSlots.to}</b></p>
                </Col>

                {/* no need for it, soon each booking has its own page, on the list only should appear the basic information */}
                {/* <Col 
                  className="text-right"
                  style={{display:'flex', alignItems:'center', margin:'auto', justifyContent:'center'}}
                >
                  <img
                    style={{borderRadius: 5}}
                    src={booking.car?.image}
                    height="140"
                    className="p-2"
                  />
                </Col> */}
              </Row>
            );
          })}

        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default UserBookings;
