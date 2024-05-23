import React from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import './App.scss';

//sample data

// const photos = [...Array(3)];
// const photoItems = photos.map((photo, i) => <PhotoListItem key={i} data={sampleDataForPhotoListItem} />);


// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">
      {/* {photoItems} */}
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default App;
