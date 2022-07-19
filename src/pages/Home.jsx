import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import SearchBar from "../components/SearchBar"

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/" className="no-cursor">About</Link>
          <Link to="/" className="no-cursor">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/" className="no-cursor">Gmail</Link>
          <Link to="/" className="no-cursor">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home__inputContainer">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
