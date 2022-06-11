import React from 'react';
import PopupWithForm from './PopupWithForm';

const EditAvatarPopup = (props) => {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  React.useEffect(() => {
    avatarRef.current.value = '';
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name={'avatar'}
      title={'Обновить аватар'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText={'Сохранить'}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__set">
        <label className="popup__label-input">
          <input
            ref={avatarRef}
            type="url"
            className="popup__input popup__input_type_link"
            name="link"
            defaultValue=""
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error link-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
