import React, { useState } from "react";
import "./movie.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("MovieList");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: ""
  });
  const [bookingId, setBookingId] = useState("");

  const movies = [
    { id: 1, title: "Inception", rating: "8.8", genre: "Sci-Fi", image: "../inception.jpg" },
    { id: 2, title: "The Dark Knight", rating: "9.0", genre: "Action", image: "../The Dark Knight.png" },
    { id: 3, title: "Interstellar", rating: "8.6", genre: "Sci-Fi", image: "../Interstellar.png" },
    { id: 4, title: "John Wick", rating: "8.9", genre: "Crime", image: "../John Wick.png" },
    { id: 5, title: "The Matrix", rating: "8.7", genre: "Sci-Fi", image: "../The Matrix.png" },
    { id: 6, title: "Forrest Gump", rating: "8.8", genre: "Drama", image: "../forrestgump.png" },
    { id: 7, title: "Bhramayugam", rating: "9.2", genre: "Thriller/horror", image: "../bhramayugam.png" },
    { id: 8, title: "Baahubali", rating: "8.8", genre: "Action/Fantasy", image: "../baaubali.png" },
    { id: 9, title: "SISU", rating: "8.7", genre: "Action/War", image: "../Sisu.png" },
    { id: 10, title: "The Greyman", rating: "8.3", genre: "Action", image: "../the greyman.png" },
    { id: 11, title: "Tomorrowland", rating: "6.5", genre: "Sci-Fi", image: "../tomorrowland.png" },
    { id: 12, title: "Jumanji", rating: "7.6", genre: "Adventure", image: "../jumanji.png" },
    { id: 13, title: "300", rating: "8.0", genre: "Action", image: "../300.png" },
    { id: 14, title: "Jurassic Park", rating: "8.1", genre: "Adventure", image: "../jurassic world.png" },
    { id: 15, title: "Solo Leveling", rating: "8.5", genre: "Animation", image: "../solo levelling.png" },
    { id: 16, title: "Aavesham", rating: "9.0", genre: "Comedy/action", image: "../Aavesham.png" }
  ];

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setCurrentPage("MovieDetails");
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const id = Math.random().toString(36).substr(2, 8).toUpperCase();
    setBookingId(id);
    setCurrentPage("Confirmation");
  };

  const renderMovieList = () => (
    <div className="page">
      <h1>Now Showing</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card" onClick={() => handleMovieSelect(movie)}>
            <img src={`./images/${movie.image}`} alt={movie.title} className="movie-image" />
            <h2>{movie.title}</h2>
            <p>Rating: {movie.rating}</p>
            <p>Genre: {movie.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMovieDetails = () => (
    <div className="page">
      <h1>{selectedMovie.title}</h1>
      <p>Genre: {selectedMovie.genre}</p>
      <p>Rating: {selectedMovie.rating}</p>
      <button onClick={() => setCurrentPage("BookingForm")}>Book Now</button>
      <button onClick={() => setCurrentPage("MovieList")}>Back</button>
    </div>
  );

  const renderBookingForm = () => (
    <div className="page">
      <h1>Booking Form</h1>
      <form onSubmit={handleBookingSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Mobile</label>
          <input
            type="tel"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            required
          />
        </div>
        <button type="submit">Confirm Booking</button>
      </form>
      <button onClick={() => setCurrentPage("MovieList")}>Back</button>
    </div>
  );

  const renderConfirmation = () => (
    <div className="page">
      <h1>Booking Confirmed!</h1>
      <p>Booking ID: {bookingId}</p>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Mobile: {formData.mobile}</p>
      <button onClick={() => setCurrentPage("MovieList")}>Back to Home</button>
    </div>
  );

  return (
    <div className="app">
      {currentPage === "MovieList" && renderMovieList()}
      {currentPage === "MovieDetails" && renderMovieDetails()}
      {currentPage === "BookingForm" && renderBookingForm()}
      {currentPage === "Confirmation" && renderConfirmation()}
    </div>
  );
};

export default App;
