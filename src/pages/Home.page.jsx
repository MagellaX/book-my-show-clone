import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

import DefaultLayoutHoc from '../layout/Default.layout';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCardSlider.Component'; // Import EntertainmentCardSlider component

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  useEffect(() => {
    const fetchData = async (endpoint, setter) => {
      try {
        const response = await axios.get(endpoint);
        setter(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData('/movie/popular', setRecommendedMovies);
    fetchData('/movie/top_rated', setPremierMovies);
    fetchData('/movie/upcoming', setOnlineStreamEvents);
  }, []); 
  // Run useEffect only once on component mount

  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto px-5 md:px-11 my-9">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of recommended movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
            <PosterSlider
              title="Premiers"
              subject="Brand new releases every Friday"
              posters={premierMovies}
              isDark={true}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Online Streaming Events"
          subject=""
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayoutHoc(HomePage);

