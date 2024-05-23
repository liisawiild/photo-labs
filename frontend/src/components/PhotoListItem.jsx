import React from "react";

import "../styles/PhotoListItem.scss";

/**
 * @params {username, imageSource, id, location, profile}
 */




const PhotoListItem = (props) => {
  const { data } = props;

  return (
    <article className="photo-list__item">
      <img className="photo-list__image" src={data.imageSource}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile"src={data.profile}/>
        <div className="photo-list__user-info">
          {data.username}
          <div className="photo-list__user-location" >{data.location.city}, {data.location.country}</div>
        </div>
      </div>
    </article>


  )
};

export default PhotoListItem;
