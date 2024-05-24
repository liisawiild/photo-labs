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

/**
 * @params {name, urls, id, location, profile}
 */



const PhotoListItem = (props) => {
  const { photoData, updateFavourites, handleModalOpen } = props;
  // console.log(data);

  return (
    <article className="photo-list__item">
      <PhotoFavButton photoData={photoData} updateFavourites={updateFavourites}/>
      <img className="photo-list__image" src={photoData.urls.regular} onClick={() => handleModalOpen()}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile"src={photoData.user.profile}/>
        <div className="photo-list__user-info">
          {photoData.user.name}
          <div className="photo-list__user-location" >{photoData.location.city}, {photoData.location.country}</div>
        </div>
      </div>
    </article>
  )
};

export default PhotoListItem;
