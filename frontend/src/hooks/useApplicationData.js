export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  DISPLAY_MODAL: 'DISPLAY_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  TOPIC_CLICKED: 'TOPIC_CLICKED',
}

export const useApplicationData = (state, action) => {
  switch (action.type) {
    case 'FAV_PHOTO_ADDED':
      return {...state, favouritedPhotos: [...state.favouritedPhotos, action.payload]}
    case 'FAV_PHOTO_REMOVED':
      return {...state, favouritedPhotos: state.favouritedPhotos.filter((id) => id !== action.payload)}
    case 'DISPLAY_MODAL':
      return {...state, displayModal: true, photoClicked: action.payload}
    case 'CLOSE_MODAL':
      return {...state, displayModal: false}
    case 'SET_PHOTO_DATA':
      return {...state, photoData: action.payload}
    case 'SET_TOPIC_DATA':
      return {...state, topicData: action.payload}
    case 'TOPIC_CLICKED':
      return {...state, topicClicked: action.payload}
    case 'GET_PHOTOS_BY_TOPICS':
      return {...state, photoData: action.payload, topicClicked: null}
    default:
      throw new Error(`invalid action type ${action.type}`);
  }
}

//when a photo's heart is clicked, depending on initial state it should fill or not fill and be added or removed from favouritedPhotos
export const updateFavourites = (photoId, state, dispatch) => {
  if (state.favouritedPhotos.includes(photoId)) {
      dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId});
    } else {
      dispatch({type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId});
    }
  }

//when a similar photo is clicked within the modal the photo's data will be updated to include it's similar_photos data
export const getSimilarPhotosCompleteData = (state, photos) => {
  const similarPhotosArr = Object.values(state.photoClicked.similar_photos);
  const similarPhotoIdArr = similarPhotosArr.map((photo) => photo.id);
  return photos.filter((photo) => similarPhotoIdArr.includes(photo.id));
}

//when the favourites badge is clicked, pull favouritedPhotos data and dispatch it into the set_photo_data reducer
export const getfavouritedPhotos = (state, photos, dispatch) => {
  const favouritedPhotosList = photos.filter((photo) => state.favouritedPhotos.includes(photo.id));
  dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: favouritedPhotosList});
}

