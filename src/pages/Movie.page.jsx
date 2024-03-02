import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import MovieLayoutHoc from "../layout/Movie.layout";
import { MovieContext } from "../context/Movie.context";
import MovieHero from "../components/MovieHero/MovieHero.Component";
import Cast from "../components/Cast/Cast.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

const MoviePage = () => {
  const { id } = useParams();
  const { movie, setMovie } = useContext(MovieContext);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [castData, similarMoviesData, recommendedMoviesData, movieData] = await Promise.all([
        axios.get(`/movie/${id}/credits`),
        axios.get(`/movie/${id}/similar`),
        axios.get(`/movie/${id}/recommendations`),
        axios.get(`/movie/${id}`)
      ]);
      setCast(castData.data.cast);
      setSimilarMovies(similarMoviesData.data.results);
      setRecommendedMovies(recommendedMoviesData.data.results);
      setMovie(movieData.data);
    };

    fetchData();
  }, [id, setMovie]);

  const settingCast = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 4,
        },
      },
    ],
  };

  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg-ml-20 lg:w-2/3">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl">About the movie</h1>
          <p>{movie.overview}</p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            {[
              {
                icon: <FaCcVisa />,
                title: "Visa Stream Offer",
                description: "Get 50% off up to INR 150 on all RuPay card* on BookMyShow Stream."
              },
              {
                icon: <FaCcApplePay />,
                title: "Film Pass",
                description: "Get 50% off up to INR 150 on all RuPay card* on BookMyShow Stream."
              }
            ].map((offer, index) => (
              <div key={index} className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                <div className="w-8 h-8">{offer.icon}</div>
                <div className="flex flex-col items-start">
                  <h3 className="text-gray-700 text-xl font-bold">{offer.title}</h3>
                  <p className="text-gray-600">{offer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast and Crew</h2>
          <Slider {...settingCast}>
            {cast.map((castData) => (
              <Cast key={castData.id} image={castData.profile_path} castName={castData.original_name} role={castData.character} />
            ))}
          </Slider>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <PosterSlider config={settings} title="Recommended Movies" posters={recommendedMovies} isDark={false} />
        </div>

        <div className="my-8">
          <hr />
        </div>

        <PosterSlider config={settings} title="BMS XCLUSICE" posters={recommendedMovies} isDark={false} />
      </div>
    </>
  );
};

export default MovieLayoutHoc(MoviePage);
