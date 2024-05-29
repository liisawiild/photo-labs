import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import { ACTIONS } from '../hooks/useApplicationData'
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { photoData, state, dispatch } = props;

  return (
    <article className="photo-list__item">
      <PhotoFavButton photoData={photoData} state={state} dispatch={dispatch} />
      {<img className="photo-list__image" src={photoData.urls.regular} onClick={() => dispatch({ type: ACTIONS.DISPLAY_MODAL, payload: photoData })} />}
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photoData.user.profile} />
        <div className="photo-list__user-info">
          {photoData.user.name}
          <div className="photo-list__user-location" >{photoData.location.city}, {photoData.location.country}</div>
        </div>
      </div>
    </article>
  )
};

export default PhotoListItem;
