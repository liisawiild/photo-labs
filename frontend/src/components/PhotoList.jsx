// const photos = [
//   {
//     ...photo1,
//     similar_photos: {
//       photo2,
//       photo3,
//       photo4,
//       photo5,
//     }
//   }
// ]

// const photo1 = {
//   "id": "1",
//   "location": {
//     "city": "Montreal",
//     "country": "Canada"
//   },
//   "urls": {
//     "full": `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
//     "regular": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`
//   },
//   "user": {
//     "id": "1",
//     "username": "exampleuser",
//     "name": "Joe Example",
//     "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
//   }
// }


import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  const { photos, state, dispatch } = props;

  const listPhotosArr = photos.map((photo) => <PhotoListItem key={photo.id} photoData={photo} state={state} dispatch={dispatch} />)

  return (
    <ul className="photo-list">
      {listPhotosArr}
    </ul>
  );
};

export default PhotoList;
