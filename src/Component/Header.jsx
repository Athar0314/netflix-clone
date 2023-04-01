import React from "react";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import "../App.scss";

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          alt="logo"
        />
      </Link>
      <div>
        <Link to="/tvshows">Tv Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recent">Recently Added</Link>
        {/* <Link to="/mylist">My List</Link> */}
      </div>
      <ImSearch />
    </nav>
  );
}

export default Header;
