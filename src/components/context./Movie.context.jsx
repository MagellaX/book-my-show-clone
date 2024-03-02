import React, { createContext, useState } from "react";

// Create a context for managing movie-related state...
export const MovieContext = createContext();

// MovieProvider component to wrap the application and provide movie context
const MovieProvider = ({ children }) => {
  // State to manage movie data
  const [movie, setMovie] = useState({
    id: 0,
    original_title: "",
    overview: "",
    backdrop_path: "",
    poster_path: "",
  });

//   Render MovieContext.Provider to provide movie state and setter function to children...
  return (
    <MovieContext.Provider value={{ movie, setMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
