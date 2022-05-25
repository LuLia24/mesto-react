import React from 'react';

function ImagePopup(props) {
  return (
    <div className={`popup popup_name_resize ${props.card.link && 'popup_opened'}`}>
      <figure className="popup__image-box">
        <button
          className="popup__close-icon popup__close-icon_name_resize"
          type="button"
          onClick={props.onClose}
        ></button>
        <img src={props.card.link} alt={props.card.name} className="popup__image" />
        <figcaption className="popup__image-text"></figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
