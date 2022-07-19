import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import response from "../response";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  //   LIVE API
    const { data } = useGoogleSearch(term);

  // MOCK API
//   const data = response;

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            className="searchPage__logo"
            alt=""
          />
        </Link>
        <div className="searchPage__headerBody">
          <SearchBar hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link className="no-cursor" to="">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link className="no-cursor" to="">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link className="no-cursor" to="">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link className="no-cursor" to="">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link className="no-cursor" to="">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link className="no-cursor" to="">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link className="no-cursor" to="">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link className="no-cursor" to="">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                      className="searchPage__resultImage"
                    />
                  )}
                {item.displayLink} ▽
              </a>
              <a href={item.link} className="searchPage__resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
