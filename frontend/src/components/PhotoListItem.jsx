import React from "react";

import "../styles/PhotoListItem.scss";

/**
 * @params {username, imageSource, id, location, profile}
 */




const PhotoListItem = (props) => {
  const { data } = props;

  return (
    <>
    <img src={data.imageSource}/>
    <img src={data.profile}/>
    <h1>{data.username}</h1>
    <h1>{data.location.city}, {data.location.country}</h1>
    
    </>


  )
};

export default PhotoListItem;
