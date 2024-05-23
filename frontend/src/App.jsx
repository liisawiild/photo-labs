import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

//sample data
const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const photos = [...Array(3)];
const photoItems = photos.map((photo, i) => <PhotoListItem key={i} data={sampleDataForPhotoListItem} />);


// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">
      {photoItems}
    </div>
  );
};

export default App;
