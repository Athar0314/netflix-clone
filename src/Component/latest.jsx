import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiPlay } from "react-icons/bi";
import { API_KEY, IMGURL, POPULAR, Row, URL } from "./const";
import LoadingSpinner from "./Loader";

function Latest() {
  const [latest, setLatest] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchLatest = async () => {
      const {
        data: { results },
      } = await axios.get(`${URL}/${POPULAR}?api_key=${API_KEY}`);
      setLatest(results);
      setIsLoading(false);
    };
    fetchLatest();
  }, []);
  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <section>
      <div
        className="banner"
        style={{
          backgroundImage: latest[0]
            ? `url(${`${IMGURL}/${latest[0].poster_path}`})`
            : "rgb(16, 16, 16)",
        }}
      >
        {latest[0] && <h1>{latest[0].original_title}</h1>}
        {latest[0] && <p>{latest[0].overview}</p>}
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
      <Row title={"Popular"} arr={latest} />
      <Row title={"Popular"} arr={latest} />
    </section>
  );
}

export default Latest;
