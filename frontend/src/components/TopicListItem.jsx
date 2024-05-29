import React from "react";
import { ACTIONS } from '../hooks/useApplicationData'
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { topicData, dispatch } = props

  return (
    <div className="topic-list__item span" onClick={() => dispatch({ type: ACTIONS.TOPIC_CLICKED, payload: topicData.id })}>{topicData.title}</div>
  );
};

export default TopicListItem;
