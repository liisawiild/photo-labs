// const photos = [
//   {
//     ...photo1,
//     similar_photos: {
//       photo2,
//       photo3,
//       photo4,
//       photo5,
//     }
//   }
// ]

// const photo1 = {
//   "id": "1",
//   "location": {
//     "city": "Montreal",
//     "country": "Canada"
//   },
//   "urls": {
//     "full": `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
//     "regular": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`
//   },
//   "user": {
//     "id": "1",
//     "username": "exampleuser",
//     "name": "Joe Example",
//     "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
//   }
// }


import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import { ACTIONS } from '../hooks/useApplicationData'


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
