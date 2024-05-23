import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

/**
 * @params {username, imageSource, id, location, profile}
 */




const PhotoListItem = (props) => {
  const { data } = props;
  // console.log(data);

  return (
    <article className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={data.urls.regular}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile"src={data.user.profile}/>
        <div className="photo-list__user-info">
          {data.user.name}
          <div className="photo-list__user-location" >{data.location.city}, {data.location.country}</div>
        </div>
      </div>
    </article>


  )
};

export default PhotoListItem;
