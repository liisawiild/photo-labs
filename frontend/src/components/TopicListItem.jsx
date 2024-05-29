// const topics = [
//   {
//     "id": "1",
//     "slug": "topic-1",
//     "title": "Nature"
//   }
// ]


import React from "react";
import "../styles/TopicListItem.scss";
import { ACTIONS } from '../hooks/useApplicationData'


const TopicListItem = (props) => {
  const { topicData, dispatch } = props

  return (
    <div className="topic-list__item span" onClick={() => dispatch({ type: ACTIONS.TOPIC_CLICKED, payload: topicData.id })}>{topicData.title}</div>
  );
};

export default TopicListItem;
