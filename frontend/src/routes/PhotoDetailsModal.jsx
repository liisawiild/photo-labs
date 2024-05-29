import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import { ACTIONS, getSimilarPhotosCompleteData } from '../hooks/useApplicationData'


const PhotoDetailsModal = (props) => {
  const { state, dispatch, photos } = props;

  return (
    <div className="photo-modal-backdrop">
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
            <PhotoList photos={getSimilarPhotosCompleteData(state, photos)} state={state} dispatch={dispatch} />
          </div>
        </article >
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
