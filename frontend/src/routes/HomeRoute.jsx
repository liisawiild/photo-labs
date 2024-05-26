import React from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import {ACTIONS} from '../hooks/useApplicationData'


const HomeRoute = (props) => {
  const {photos, topics, state, dispatch} = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} state={state} dispatch={dispatch}/>
      <PhotoList photos={photos} state={state} dispatch={dispatch}/>
    </div>
  )
}

export default HomeRoute;

//STRETCH: could you add an on click event to close the modal if one is open, instead of having to click on the x specifically?