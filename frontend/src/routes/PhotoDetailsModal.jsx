import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { handleModalClose, photoClicked } = props;
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick = {() => handleModalClose()}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {console.log(photoClicked)}
    </div>
  )
};

export default PhotoDetailsModal;
