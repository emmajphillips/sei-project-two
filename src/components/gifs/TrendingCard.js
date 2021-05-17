import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import CopyButton from "../common/CopyButton";
import FavouritesButton from "../common/FavouritesButton";

const TrendingCard = ({ images }) => {
  return (
    <div className="column is-fullwidth-mobile is-half-tablet is-one-quarter-desktop card">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <LazyLoadImage
              alt={"gif"}
              src={images.original.url}
              placeholder={<span>Hello</span>}
            />
          </figure>
        </div>
        <CopyButton copy={images.original.url} />
        <FavouritesButton favourite={images.original.url} />
      </div>
    </div>
  );
};

export default TrendingCard;
