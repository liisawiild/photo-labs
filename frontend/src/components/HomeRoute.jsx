import React, { useState } from 'react';
import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';



const HomeRoute = (props) => {
  const {photos, topics} = props;

  const [favouritedPhotos, setFavouritedPhotos] = useState([]);
  console.log(favouritedPhotos);

  const updateFavourites = (photoId) => {
    //if photo is favourited already it means this photo is being unfavourited and should be removed
    if (favouritedPhotos.includes(photoId)) {
      //filter through favourites array and don't incluude the id that matches photoId
      const updatedState = favouritedPhotos.filter((id) => id !== photoId)
      setFavouritedPhotos(updatedState);
    } else {
      const updatedState = [...favouritedPhotos, photoId];
      setFavouritedPhotos(updatedState);
    }
  }

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favouritedPhotos={favouritedPhotos}/>
      <PhotoList photos={photos} updateFavourites={updateFavourites}/>
    </div>
  )
}

export default HomeRoute;