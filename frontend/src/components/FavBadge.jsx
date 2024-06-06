import React from 'react';
import FavIcon from './FavIcon';
import { getfavouritedPhotos } from 'hooks/useApplicationData';
import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  const { state, dispatch, photos } = props;

  const onePhotoLiked = state.favouritedPhotos.length > 0 ? true : false;

  //clicking the FavBadge should list out all favourited photos
  const handleClick = () => {
    if (state.favouritedPhotos.length > 0) {
      getfavouritedPhotos(state, photos, dispatch);
    } else {
      alert("No photos have been favourited yet. Heart some photos first to see a curated list of your favourite photos")
    }
  }

  return (
    <div className='fav-badge' onClick={handleClick}>
      <FavIcon onePhotoLiked={onePhotoLiked} selected={true} />
    </div>
  )
};

export default FavBadge;