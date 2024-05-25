import React, {useReducer} from 'react';
import HomeRoute from './routes/HomeRoute';
import photos from '../src/mocks/photos'
import topics from '../src/mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import { useApplicationData} from './hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [state, dispatch] = useReducer(useApplicationData, {displayModal: false, photoClicked: {}, favouritedPhotos: [],})
  console.log(state.displayModal);


  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} state={state} dispatch={dispatch}/>
      <div>{state.displayModal && <PhotoDetailsModal photos={photos} state={state} dispatch={dispatch}/>}</div>
    </div>
  );
};

export default App;
