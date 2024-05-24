// const topics = [
//   {
//     "id": "1",
//     "slug": "topic-1",
//     "title": "Nature"
//   }
// ]

import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = (props) => {
  const {topics} = props;
  const topicArr = topics.map((topic) => <TopicListItem key={topic.id} topicData={topic} />)

  return (
    <div className="top-nav-bar__topic-list">{topicArr}</div>
  );
};

export default TopicList;
