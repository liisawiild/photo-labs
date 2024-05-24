import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ favouritedPhotos }) => {

  const onePhotoLiked = favouritedPhotos.length > 0 ? true : false;

  console.log("FavBadge", favouritedPhotos.length);

  return (
    <div className='fav-badge'>
      <FavIcon onePhotoLiked={onePhotoLiked} selected={true}/>
    </div>
  ) 
};

export default FavBadge;