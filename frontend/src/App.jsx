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

const photos = [<PhotoListItem key={1} data={sampleDataForPhotoListItem} />,<PhotoListItem key={2} data={sampleDataForPhotoListItem} />,<PhotoListItem key={3} data={sampleDataForPhotoListItem} />];


// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">
      {photos}
    </div>
  );
};

export default App;
