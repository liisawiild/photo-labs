
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

//should any reference to the previous state be prev?
// In useApplicationData.js, you've done a good job defining your reducer
// function and actions. However, it's not necessary to export useApplicationData
// as a function. Instead, you could define it as a custom hook that returns the
// state and dispatch function. This would allow you to encapsulate all the state
// management logic within the hook, making your components cleaner and easier to
// understand.
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

export const updateFavourites = (photoId, state, dispatch) => {
  // console.log("photo being liked/unliked", photoId)
  if (state.favouritedPhotos.includes(photoId)) {
      dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId});
    } else {
      dispatch({type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId});
    }
  }