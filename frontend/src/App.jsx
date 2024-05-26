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
    topicData: [], 
    topicClicked: null,
  }

  const [state, dispatch] = useReducer(useApplicationData, initialState)
  // console.log(state.displayModal);

  //consider promise.all?
  //run on load
  useEffect(() => {
    fetch('/api/photos')
    .then(res => res.json())
    .then(data => dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data}))
    .catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    fetch('/api/topics')
    .then(res => res.json())
    .then(data => dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: data}))
    .catch((err) => console.log(err));
  }, [])

  //run only when topic clicked
  useEffect(() => {
    if (state.topicClicked) {
      fetch(`/api/topics/photos/${state.topicClicked}`)
      .then(res => res.json())
      .then(data => dispatch({type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data}))
      .catch((err) => console.log(err));
    }
  }, [state.topicClicked])
  

  return (
    <div className="App">
      <HomeRoute photos={state.photoData} topics={state.topicData} state={state} dispatch={dispatch}/>
      <div>{state.displayModal && <PhotoDetailsModal photos={state.photoData} state={state} dispatch={dispatch}/>}</div>
    </div>
  );
};

export default App;
