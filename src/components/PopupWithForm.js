import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_name_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button
          className={`popup__close-icon popup__close-icon_name_${props.name}`}
          type="button"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>

        <form
          action="#"
          className={`popup__form popup__form_name_${props.name}`}
          name={props.name}
          noValidate
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button className="popup__submit" type="submit">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
