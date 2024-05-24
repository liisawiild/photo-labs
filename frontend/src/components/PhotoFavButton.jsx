import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {photoData, updateFavourites} = props

  const [isFavourite, setIsFavourite] = useState(false);

  const handleClick = () => {
    console.log("toggled");
    setIsFavourite(previsFavourite => !previsFavourite);
    updateFavourites(photoData.id);
  }

  return (
    <div className="photo-list__fav-icon" onClick={() => handleClick()}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavourite}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;