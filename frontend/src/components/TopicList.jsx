import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const { topics, state, dispatch } = props;

  const topicArr = topics.map((topic) => <TopicListItem key={topic.id} topicData={topic} state={state} dispatch={dispatch} />)

  return (
    <div className="top-nav-bar__topic-list">{topicArr}</div>
  );
};

export default TopicList;
