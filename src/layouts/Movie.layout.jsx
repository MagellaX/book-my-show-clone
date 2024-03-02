import React from 'react';

import MovieNavbar from '../components/Navbar/MovieNavbar.Component';

const MovieLayoutHoc = (Component) => (props) => (
  <div>
    <MovieNavbar />
    <Component {...props} />
    <div>Footer</div>
  </div>
);

export default MovieLayoutHoc;

