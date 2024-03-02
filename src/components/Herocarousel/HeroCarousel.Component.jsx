import React from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.Component";
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component';

// Sample array of movie objects with details

const movies = [
    {
        adult: false,
        backdrop_path: "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
        genre_ids: [16, 878, 28],
        id: 610150,
        original_language: "ja",
        original_title: "ドラゴンボール超 スーパーヒーロー",
        overview: "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
        popularity: 5953.989,
        poster_path: "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
        release_date: "2022-06-11",
        title: "Dragon Ball Super: Super Hero",
        video: false,
        vote_average: 8,
        vote_count: 1426
    },
    {
        adult: false,
        backdrop_path: "/rqgeBNWXas1yrAyXxwi9CahfScx.jpg",
        genre_ids: [53],
        id: 985939,
        original_language: "en",
        original_title: "Fall",
        overview: "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights.",
        popularity: 6731.327,
        poster_path: "/9f5sIJEgvUpFv0ozfA6TurG4j22.jpg",
        release_date: "2022-08-11",
        title: "Fall",
        video: false,
        vote_average: 7.4,
        vote_count: 346
    }
];

const HeroCarousel = () =>
 {
    // Settings for large and small screen devices
    const settings = {
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <>
            {/* HeroCarousel for small screen devices */}

            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {movies.map((movie) => (
                        <div className="w-full h-56 md:h-80 py-3" key={movie.id}>
                            {/* Display each movie's backdrop image */}
                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                alt={movie.title}
                                className="w-full h-full rounded-md object-cover"
                            />
                            {/* Display movie details as overlay */}

                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-55 text-white p-5">
                                <h2 className="text-lg font-semibold">{movie.title}</h2>
                                <p className="text-sm">{movie.release_date}</p>
                                <p className="text-sm">Genres: {movie.genre_ids.join(", ")}</p>
                                <p className="text-sm">{movie.overview}</p>
                            </div>
                        </div>
                    ))}
                </HeroSlider>
            </div>

            {/* HeroCarousel for large screen devices */}

            <div className="hidden lg:block">
                <HeroSlider {...settings}>
                    {movies.map((movie) => (
                        <div className="w-full h-96 px-2 py-3" key={movie.id}>

                            {/* Display each movie's backdrop image */}

                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                alt={movie.title}
                                className="w-full h-full rounded-md object-cover"
                            />

                            {/* Display movie details as overlay */}

                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                                <h2 className="text-lg font-semibold">{movie.title}</h2>
                                <p className="text-sm">{movie.release_date}</p>
                                <p className="text-sm">Genres: {movie.genre_ids.join(", ")}</p>
                                <p className="text-sm">{movie.overview}</p>
                            </div>
                        </div>
                    ))}
                </HeroSlider>
            </div>
        </>
    );
};

export default HeroCarousel;
