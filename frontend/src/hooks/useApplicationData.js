export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  DISPLAY_MODAL: 'DISPLAY_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
}

export const useApplicationData = (state, action) => {
  switch (action.type) {
    case 'FAV_PHOTO_ADDED':
      return {...state, favouritedPhotos: [...state.favouritedPhotos, action.payload]}
    case 'FAV_PHOTO_REMOVED':
      return {...state, favouritedPhotos: state.favouritedPhotos.filter((id) => {id !== action.payload})}
    case 'DISPLAY_MODAL':
      return {...state, displayModal: true, photoClicked: action.payload}
    case 'CLOSE_MODAL':
      return {...state, displayModal: false}
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