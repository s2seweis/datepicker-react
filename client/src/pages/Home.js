import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DefaultLayout from '../components/DefaultLayout/DefaultLayout';
import { getAllCars } from '../redux/actions/carsActions';
import { Col, Row, DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import moment from 'moment';

const { RangePicker } = DatePicker;

function Home() {
  const { cars } = useSelector(state => state.carsReducer);
  const { users } = useSelector(state => state.usersReducer);
  const { loading } = useSelector(state => state.alertsReducer);
  const [totalCars, setTotalCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  // const [from, setFrom] = useState ();
  // const [to, setTo] = useState ();

  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  useEffect(() => {
    // setTotalCars(cars);
  }, [cars]);

  function setFilter(values) {
    if (values && values.length === 2) {
      const selectedFrom = moment(values[0]);
      const selectedTo = moment(values[1]);

      const filteredCars = cars.filter(car => {
        const bookedTimeSlots = car.bookedTimeSlots || [];
        const isAvailable = bookedTimeSlots.every(booking => {
          const bookingFrom = moment(booking.from);
          const bookingTo = moment(booking.to);

          return (
            selectedFrom.isSameOrAfter(bookingTo) ||
            selectedTo.isSameOrBefore(bookingFrom)
          );
        });

        setIsLoading(false);
        return isAvailable;
      });

      setTotalCars(filteredCars);
    } else {
      // Handle the case when values is null or not an array with 2 elements
      setIsLoading(false);
      setTotalCars(cars); // Reset to the initial state or handle it as per your requirement
    }
  }

  return (
    <DefaultLayout users={users}>
      <Row className="mt-3" justify="center">
        <Col lg={20} sm={24} className="justify-content-left">
          <RangePicker
            showTime={{ format: 'HH:mm' }}
            format="MMM DD yyyy HH:mm"
            onChange={setFilter}
          />
        </Col>
      </Row>

      {loading && <Spinner />}

      {isLoading ? (
        <div style={{ margin: '50px 50px' }}> <h3>Select a date to see availability of the cars</h3> </div>
      ) : (
        <Row justify="center" gutter={16}>
          {totalCars.map(car => (
            <Col key={car._id}>
              <div className="car p-2 bs1">
                <img src={car.image} className="carimg" />
                <div className="car-content d-flex align-items-center justify-content-between">
                  <div className="text-left pl-2">
                    <p>{car.name}</p>
                    <p> Rent Per Hour {car.rentPerHour} /-</p>
                  </div>
                  <div>
                    <button className="btn1 mr-2">
                      <Link to={`/booking/${car._id}`}>Book Now</Link>
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}
      {/* <MyDatePickerComponent /> */}
    </DefaultLayout>
  );
}

export default Home;
