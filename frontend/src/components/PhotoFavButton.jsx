import React, { useCallback, useState, useEffect } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { updateFavourites } from '../hooks/useApplicationData'


function PhotoFavButton(props) {
  const { photoData, state, dispatch } = props;

  const [isFavourite, setIsFavourite] = useState(state.favouritedPhotos.includes(photoData.id));

  //used b/c it was not the isFavourite hook was not triggered when an initial useState(*) value was input
  useEffect(() => {
    // This effect updates the isFavourite state whenever favouritedPhotos changes.
    const isCurrentlyFavourite = state.favouritedPhotos.includes(photoData.id);
    setIsFavourite(isCurrentlyFavourite);
  }, [state.favouritedPhotos, photoData.id]); // Depend on favouritedPhotos and photoData.id

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