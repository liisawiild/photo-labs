import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge'
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  const { topics, state, dispatch, photos } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} state={state} dispatch={dispatch} />
      <FavBadge state={state} dispatch={dispatch} photos={photos}/>
    </div>
  )
}

export default TopNavigation;