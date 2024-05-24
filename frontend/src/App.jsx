import React, {useState} from 'react';
import HomeRoute from './components/HomeRoute';
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
  console.log("displayModal state", displayModal);

  const handleModalOpen = () => {
    console.log("photo clicked");
    const updatedState = true
    setDisplayModal(updatedState);
  }

  const handleModalClose = () => {
    const updatedState = false;
    setDisplayModal(updatedState);
  }

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} handleModalOpen={handleModalOpen}/>
      <div>{displayModal && <PhotoDetailsModal handleModalClose={handleModalClose} />}</div>
    </div>
  );
};

export default App;
