import React, { useEffect, useState } from "react";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import {
  API_KEY,
  IMGURL,
  AIR_TODAY,
  POPULAR,
  Row,
  TOP_RATED,
  TVSHOWSURL,
  ON_AIR,
} from "./const";
import axios from "axios";
import LoadingSpinner from "./Loader";

function TvShow() {
  const [populartvShow, setPopulartvShow] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowplayingmovies, setNowPlayingmovies] = useState([]);
  const [upcomingmovies, setUpcomingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${TVSHOWSURL}/${ON_AIR}?api_key=${API_KEY}`);
      setUpcomingMovies(results);
      setIsLoading(false);
    };
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${TVSHOWSURL}/${POPULAR}?api_key=${API_KEY}`);
      setPopulartvShow(results);
      setIsLoading(false);
    };
    const fetchnowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${TVSHOWSURL}/${AIR_TODAY}?api_key=${API_KEY}`);
      setNowPlayingmovies(results);
      setIsLoading(false);
    };
    const fetchtopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${TVSHOWSURL}/${TOP_RATED}?api_key=${API_KEY}`);
      setTopRatedMovies(results);
      setIsLoading(false);
    };
    fetchUpcoming();
    fetchPopular();
    fetchnowPlaying();
    fetchtopRated();
  }, []);

  console.log(populartvShow);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <section>
      <div
        className="banner"
        style={{
          backgroundImage: populartvShow[0]
            ? `url(${`${IMGURL}/${populartvShow[0].poster_path}`})`
            : "rgb(16, 16, 16)",
        }}
      >
        {populartvShow[0] && <h1>{populartvShow[0].original_title}</h1>}
        {populartvShow[0] && <p>{populartvShow[0].overview}</p>}
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
      <Row title={"Popular"} arr={populartvShow} />
      <Row title={"Top Rated"} arr={topRatedMovies} />
      <Row title={"Upcoming Movies"} arr={upcomingmovies} />
      <Row title={"Now Playing"} arr={nowplayingmovies} />
    </section>
  )
}

export default TvShow;
