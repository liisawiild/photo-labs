import React from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';


const HomeRoute = (props) => {
  const { photos, topics, state, dispatch } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} state={state} dispatch={dispatch} photos={photos} />
      <PhotoList photos={photos} state={state} dispatch={dispatch}  />
    </div>
  )
}

export default HomeRoute;
