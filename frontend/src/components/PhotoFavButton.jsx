import React, { useCallback, useState, useEffect } from 'react';
import FavIcon from './FavIcon';
import { updateFavourites } from '../hooks/useApplicationData'
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { photoData, state, dispatch } = props;

  const [isFavourite, setIsFavourite] = useState(state.favouritedPhotos.includes(photoData.id));

  // This hook updates the isFavourite state whenever favouritedPhotos changes
  useEffect(() => {
    const isCurrentlyFavourite = state.favouritedPhotos.includes(photoData.id);
    setIsFavourite(isCurrentlyFavourite);
  }, [state.favouritedPhotos, photoData.id]);

  //onClick like/unliked photo and add/remove photo from the favourited list
  const handleClick = () => {
    setIsFavourite(prevIsFavourite => !prevIsFavourite);
    updateFavourites(photoData.id, state, dispatch);
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavourite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;