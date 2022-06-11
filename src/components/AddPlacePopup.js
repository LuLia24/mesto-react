import React from 'react';
import PopupWithForm from './PopupWithForm';

const AddPlacePopup = (props) => {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onAddPlace({
      name,
      link,
    });
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]);

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name={'add'}
      title={'Новое место'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText={'Создать'}
    >
      <fieldset className="popup__set">
        <label className="popup__label-input">
          <input
            type="text"
            className="popup__input popup__input_type_title"
            name="name"
            onChange={handleChangeName}
            value={name}
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__input-error name-error"></span>
        </label>

        <label className="popup__label-input">
          <input
            type="url"
            className="popup__input popup__input_type_link"
            name="link"
            onChange={handleChangeLink}
            value={link}
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error link-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
