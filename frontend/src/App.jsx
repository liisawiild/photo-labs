import React, {useReducer, useEffect} from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import { useApplicationData, ACTIONS} from './hooks/useApplicationData';
import './App.scss';


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

  //fetches photos and topics data in one Promise
  useEffect(() => {
    Promise.all([fetch('/api/photos'), fetch('/api/topics')])
    .then((responses) => {
      return Promise.all(responses.map(response => response.json()))
    })
    .then(([photosData, topicsData]) => {
      dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: photosData})
      dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: topicsData})
    })
    .catch((err) => console.log(err))
  }, [])

  //listens for a topic to be clicked, uses the topic id to collect photo data for that topic to then populate photos on the page
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
      <div>{state.displayModal && <PhotoDetailsModal photos={state.photoData} state={state} dispatch={dispatch} />}</div>
    </div>
  );
};

export default App;
