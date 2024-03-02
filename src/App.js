
import './App.css';
import {Route, route} from "react-router-dom";

// react-slick neostack

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// pages section

import MoviePage from './pages/Movie.page';
import PlayPage from './pages/play.page';
import HomePage from './pages/Home.page';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
    );
}

export default App;
