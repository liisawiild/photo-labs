import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  const { state } = props;

  const onePhotoLiked = state.favouritedPhotos.length > 0 ? true : false;


  return (
    <div className='fav-badge'>
      <FavIcon onePhotoLiked={onePhotoLiked} selected={true}/>
    </div>
  ) 
};

export default FavBadge;