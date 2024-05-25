import React, {useState} from 'react'

const useApplicationData = () => {

    const [displayModal, setDisplayModal] = useState(false);
    const [photoClicked, setPhotoClicked] = useState({});
    const [favouritedPhotos, setFavouritedPhotos] = useState([]);  
    // console.log("favourited photos", favouritedPhotos);
    // console.log("displayModal state", displayModal);
    // console.log("photoClicked state", photoClicked);

    const updateFavourites = (photoId) => {
      console.log("photo being liked/unliked", photoId)
      if (favouritedPhotos.includes(photoId)) {
        const updatedState = favouritedPhotos.filter((id) => id !== photoId)
        setFavouritedPhotos(updatedState);
      } else {
        setFavouritedPhotos([...favouritedPhotos, photoId]);
      }
    }
    const handleModalOpen = (photoData) => {
      // console.log("photo clicked");
      const updatedState = true
      setDisplayModal(updatedState);
      setPhotoClicked(photoData);
    }

    const handleModalClose = () => {
      const updatedState = false;
      setDisplayModal(updatedState);
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
