import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge'


const TopNavigation = (props) => {
  const { topics, state, dispatch } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} state={state} dispatch={dispatch} />
      <FavBadge state={state} />
    </div>
  )
}

export default TopNavigation;