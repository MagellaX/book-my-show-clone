import React from "react";
import Slider from "react-slick";

import PropTypes from "prop-types";

import Poster from "../Poster/Poster.Component";

const PosterSlider = ({ posters, title, subtitle, isDark, config }) => {
  return (
    <>
      <div className={`flex flex-col items-start sm:ml-3 ml-0 my-2`}>

        <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-black"}`}>
            
          {title}
        </h3>
        <p className={`text-sm ${isDark ? "text-white" : "text-gray-800"}`}>
          {subtitle}
        </p>
      </div>
      <Slider {...(config || {})}>
        {posters.map((each, index) => (
          <Poster {...each} isDark={isDark} key={index} />
        ))}
      </Slider>
    </>
  );
};

PosterSlider.propTypes = {
  posters: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  isDark: PropTypes.bool,
  config: PropTypes.object,
};

export default PosterSlider;
