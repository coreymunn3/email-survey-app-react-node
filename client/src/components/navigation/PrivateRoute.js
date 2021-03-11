import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? (
          <Fragment>
            <Header />
            <Component {...props} />
          </Fragment>
        ) : (
          <Redirect to='/' />
        )
      }
    />
  );
};

export default PrivateRoute;
