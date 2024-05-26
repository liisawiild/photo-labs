import React, {useReducer, useEffect} from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import { useApplicationData, ACTIONS} from './hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const initialState = {

    displayModal: false, 
    photoClicked: {}, 
    favouritedPhotos: [], 
    photoData: [], 
    topicData: []
  }

  const [state, dispatch] = useReducer(useApplicationData, initialState)
  // console.log(state.displayModal);

  useEffect(() => {
    fetch('/api/photos')
    .then(res => res.json())
    .then(data => dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data}));
  }, [])

  useEffect(() => {
    fetch('/api/topics')
    .then(res => res.json())
    .then(data => dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: data}));
  }, [])
  


  return (
    <div className="App">
      <HomeRoute photos={state.photoData} topics={state.topicData} state={state} dispatch={dispatch}/>
      <div>{state.displayModal && <PhotoDetailsModal photos={state.photoData} state={state} dispatch={dispatch}/>}</div>
    </div>
  );
};

export default App;
