import React, { useCallback, useState, useEffect } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { photoData, updateFavourites, favouritedPhotos } = props;

  const [isFavourite, setIsFavourite] = useState(favouritedPhotos.includes(photoData.id));

  //used b/c it was not the isFavourite hook was not triggered when an initial useState(*) value was input
  useEffect(() => {
    // This effect updates the isFavourite state whenever favouritedPhotos changes.
    const isCurrentlyFavourite = favouritedPhotos.includes(photoData.id);
    setIsFavourite(isCurrentlyFavourite);
  }, [favouritedPhotos, photoData.id]); // Depend on favouritedPhotos and photoData.id

  const handleClick = () => {
    setIsFavourite(prevIsFavourite => !prevIsFavourite);
    updateFavourites(photoData.id);
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