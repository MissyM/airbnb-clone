import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import DatePicker from "./DatePicker";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <DatePicker />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          clasName="banner__searchButton"
          variant="outlined"
        >
          Search Dates
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and strech your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you
        </h5>
        <Button>Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
