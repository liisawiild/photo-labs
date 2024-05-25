import React, {useState} from 'react';
import HomeRoute from './routes/HomeRoute';
import photos from '../src/mocks/photos'
import topics from '../src/mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';

//sample data

// const photos = [...Array(3)];
// const photoItems = photos.map((photo, i) => <PhotoListItem key={i} data={sampleDataForPhotoListItem} />);


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [photoClicked, setPhotoClicked] = useState({});
  const [favouritedPhotos, setFavouritedPhotos] = useState([]);  
  console.log("favourited photos", favouritedPhotos);
  // console.log("displayModal state", displayModal);
  // console.log("photoClicked state", photoClicked);

  const handleModalOpen = (photoData) => {
    // console.log("photo clicked");
    const updatedState = true
    setDisplayModal(updatedState);
    setPhotoClicked(photoData);
  }

  const handleModalClose = () => {
    const updatedState = false;
    setDisplayModal(updatedState);
  }

  const updateFavourites = (photoId) => {
    console.log("photo being liked/unliked", photoId)
    if (favouritedPhotos.includes(photoId)) {
      const updatedState = favouritedPhotos.filter((id) => id !== photoId)
      setFavouritedPhotos(updatedState);
    } else {
      setFavouritedPhotos([...favouritedPhotos, photoId]);
    }
  }

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} handleModalOpen={handleModalOpen} favouritedPhotos={favouritedPhotos} updateFavourites={updateFavourites}/>
      <div>{displayModal && <PhotoDetailsModal photos={photos} handleModalClose={handleModalClose} photoClicked={photoClicked} updateFavourites={updateFavourites} favouritedPhotos={favouritedPhotos}/>}</div>
    </div>
  );
};

export default App;
