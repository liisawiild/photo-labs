import React, { useState } from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';


const HomeRoute = (props) => {
  const {photos, topics, handleModalOpen, favouritedPhotos, updateFavourites} = props;
  console.log("HOMEROUTE--------", favouritedPhotos)

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favouritedPhotos={favouritedPhotos}/>
      <PhotoList photos={photos} updateFavourites={updateFavourites} handleModalOpen={handleModalOpen} favouritedPhotos={favouritedPhotos}/>
    </div>
  )
}

export default HomeRoute;