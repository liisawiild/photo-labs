import React from 'react';
import HomeRoute from './components/HomeRoute';
import './App.scss';
import photos from '../src/mocks/photos'
import topics from '../src/mocks/topics';

//sample data

// const photos = [...Array(3)];
// const photoItems = photos.map((photo, i) => <PhotoListItem key={i} data={sampleDataForPhotoListItem} />);


// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics}/>
    </div>
  );
};

export default App;
