// const topics = [
//   {
//     "id": "1",
//     "slug": "topic-1",
//     "title": "Nature"
//   }
// ]


import React from "react";
import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  const { topicData } = props
  // console.log(topic);

  return (
    <div className="topic-list__item span">{topicData.title}</div>
  );
};

export default TopicListItem;
