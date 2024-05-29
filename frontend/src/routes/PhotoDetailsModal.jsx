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
import { ACTIONS } from '../hooks/useApplicationData'


const PhotoDetailsModal = (props) => {
  const { state, dispatch } = props;

  const similarPhotosArr = Object.values(state.photoClicked.similar_photos)

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => dispatch({ type: ACTIONS.CLOSE_MODAL })}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <article className="photo-details-modal__images">
        <PhotoFavButton photoData={state.photoClicked} state={state} dispatch={dispatch} />
        <img className="photo-details-modal__image" src={state.photoClicked.urls.full} />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={state.photoClicked.user.profile} />
          <div className="photo-details-modal__photographer-info">
            {state.photoClicked.user.name}
            <div className="photo-details-modal__photographer-location" >{state.photoClicked.location.city}, {state.photoClicked.location.country}</div>
          </div>
        </div>
        <div className="photo-details-modal__header">Similar Photos</div>
        <div className="photo-list">
          <PhotoList photos={similarPhotosArr} state={state} dispatch={dispatch} />
        </div>
      </article >
    </div>
  )
};

export default PhotoDetailsModal;
