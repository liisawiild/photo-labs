import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { photos, state, dispatch } = props;
  console.log(photos)

  const listPhotosArr = photos.map((photo) => <PhotoListItem key={photo.id} photoData={photo} state={state} dispatch={dispatch} />)

  return (
    <ul className="photo-list" >
      {listPhotosArr}
    </ul>
  );
};

export default PhotoList;
