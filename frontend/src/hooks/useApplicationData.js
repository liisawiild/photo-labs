import React, {useState} from 'react'

const useApplicationData = () => {

    const [displayModal, setDisplayModal] = useState(false);
    const [photoClicked, setPhotoClicked] = useState({});
    const [favouritedPhotos, setFavouritedPhotos] = useState([]);  
    // console.log("favourited photos", favouritedPhotos);
    // console.log("displayModal state", displayModal);
    // console.log("photoClicked state", photoClicked);

    const updateFavourites = (photoId) => {
      // console.log("photo being liked/unliked", photoId)
      if (favouritedPhotos.includes(photoId)) {
        setFavouritedPhotos(favouritedPhotos.filter((id) => id !== photoId));
      } else {
        const newFavouriteArr = [...favouritedPhotos, photoId]
        setFavouritedPhotos(newFavouriteArr);
      }
    }
    const handleModalOpen = (photoData) => {
      // console.log("photo clicked");
      setDisplayModal(true);
      setPhotoClicked(photoData);
    }

    const handleModalClose = () => {
      setDisplayModal(false);
    }

  return {
    displayModal,
    setDisplayModal,
    photoClicked,
    setPhotoClicked,
    favouritedPhotos,
    setFavouritedPhotos,
    updateFavourites,
    handleModalOpen,
    handleModalClose
  }
 
}

export default useApplicationData;
