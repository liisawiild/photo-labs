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

import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { handleModalClose, photoClicked, updateFavourites, favouritedPhotos } = props;
  console.log("modal fav photos", favouritedPhotos);

  const similarPhotosArr = Object.values(photoClicked.similar_photos)
  // console.log("similar photos array", similarPhotosArr);


  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => handleModalClose()}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <article className="photo-details-modal__images">
        <PhotoFavButton photoData={photoClicked} updateFavourites={updateFavourites} favouritedPhotos={favouritedPhotos}/>
        <img className="photo-details-modal__image" src={photoClicked.urls.full} />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={photoClicked.user.profile} />
          <div className="photo-details-modal__photographer-info">
            {photoClicked.user.name}
            <div className="photo-details-modal__photographer-location" >{photoClicked.location.city}, {photoClicked.location.country}</div>
          </div>
        </div>
        <div className="photo-details-modal__header">Similar Photos</div>
        <div className="photo-details-modal__images">
          <PhotoList photos={similarPhotosArr} updateFavourites={updateFavourites} favouritedPhotos={favouritedPhotos}/>
        </div>
      </article >
    </div>

  )
};

export default PhotoDetailsModal;
