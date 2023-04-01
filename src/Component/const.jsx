const API_KEY = "5a9ef7963bed083e5da38152cbe730d4";
const URL = "https://api.themoviedb.org/3/movie";
const IMGURL = "https://image.tmdb.org/t/p/original";
const UPCOMING = "upcoming";
const POPULAR = "popular";
const TOP_RATED = "top_rated";
const NOW_PLAYING = "now_playing";
const TVSHOWSURL = "https://api.themoviedb.org/3/tv";
const Card = ({ img }) => {
  return <img className="card" src={img} alt="cover" />;
};
const LATEST = "latest";
const AIR_TODAY = "airing_today"
const ON_AIR = "on_the_air"
const Row = ({ title, arr = [] }) => {
    return (
      <div className="row">
        <h2>{title}</h2>
        <div>
          {arr.map((item, index) => (
            <Card key={index} img={`${IMGURL}/${item.poster_path}`} />
          ))}
        </div>
      </div>
    );
  };

export {
  API_KEY,
  URL,
  IMGURL,
  UPCOMING,
  POPULAR,
  TOP_RATED,
  NOW_PLAYING,
  TVSHOWSURL,
  Card,
  LATEST,
  Row,
  AIR_TODAY,
  ON_AIR,
};
