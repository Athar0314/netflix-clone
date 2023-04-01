import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  API_KEY,
  IMGURL,
  NOW_PLAYING,
  POPULAR,
  Row,
  TOP_RATED,
  UPCOMING,
  URL,
} from "./const";
import LoadingSpinner from "./Loader";

const Home = () => {
  const [upcomingmovies, setUpcomingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowplayingmovies, setNowPlayingmovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${URL}/${UPCOMING}?api_key=${API_KEY}`);
      setUpcomingMovies(results);
      setIsLoading(false);
    };
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${URL}/${POPULAR}?api_key=${API_KEY}`);
      setPopularMovies(results);
      setIsLoading(false);
    };
    const fetchnowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${URL}/${NOW_PLAYING}?api_key=${API_KEY}`);
      setNowPlayingmovies(results);
      setIsLoading(false);
    };
    const fetchtopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${URL}/${TOP_RATED}?api_key=${API_KEY}`);
      setTopRatedMovies(results);
      setIsLoading(false);
    };
    const getAllGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
      );
      setGenre(genres);
      setIsLoading(false);
      console.log(genres);
    };

    getAllGenre();
    fetchUpcoming();
    fetchPopular();
    fetchnowPlaying();
    fetchtopRated();
  }, []);
  console.log(popularMovies);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: popularMovies[3]
            ? `url(${`${IMGURL}/${popularMovies[3].poster_path}`})`
            : "rgb(16, 16, 16)",
        }}
      >
        {popularMovies[3] && <h1>{popularMovies[3].original_title}</h1>}
        {popularMovies[3] && <p>{popularMovies[3].overview}</p>}
        <div>
          <button>
            <BiPlay />
            Play
          </button>
          <button>
            <AiOutlinePlus />
            My List
          </button>
        </div>
      </div>
      <Row title={"Popular on Netflix"} arr={popularMovies} />
      <Row title={"Now Playing"} arr={nowplayingmovies} />
      <Row title={"Upcoming Movies"} arr={upcomingmovies} />
      <Row title={"Top Rated"} arr={topRatedMovies} />

      <div className="genreBox">
        {genre.map((item) => (
          <Link key={item.id} to={`/genre/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
