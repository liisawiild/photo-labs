import React, {useState} from 'react';
import HomeRoute from './routes/HomeRoute';
import photos from '../src/mocks/photos'
import topics from '../src/mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import useApplicationData from 'hooks/useApplicationData';
//sample data

// const photos = [...Array(3)];
// const photoItems = photos.map((photo, i) => <PhotoListItem key={i} data={sampleDataForPhotoListItem} />);


// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    displayModal,
    setDisplayModal,
    photoClicked,
    setPhotoClicked,
    favouritedPhotos,
    setFavouritedPhotos,
    updateFavourites,
    handleModalOpen,
    handleModalClose
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} handleModalOpen={handleModalOpen} favouritedPhotos={favouritedPhotos} updateFavourites={updateFavourites}/>
      <div>{displayModal && <PhotoDetailsModal photos={photos} handleModalClose={handleModalClose} photoClicked={photoClicked} updateFavourites={updateFavourites} favouritedPhotos={favouritedPhotos}/>}</div>
    </div>
  );
};

export default App;
