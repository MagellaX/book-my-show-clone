import React from 'react';
import Navbar from '../components/Navbar/Navbar.Component';

const DefaultLayoutHoc = (WrappedComponent) => {
  const WithLayout = (props) => {
    return (
      <div>
        <Navbar />

        <WrappedComponent {...props} />
        
        <div>Footer</div>
      </div>
    );
  };
  return WithLayout;
};

export default DefaultLayoutHoc;
