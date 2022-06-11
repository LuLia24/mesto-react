import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

const EditProfilePopup = (props) => {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (currentUser.name) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, props.isOpen]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name={'editor'}
      title={'Редактировать профиль'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText={'Сохранить'}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__set">
        <label className="popup__label-input">
          <input
            type="text"
            className="popup__input popup__input_type_name"
            name="name"
            onChange={handleChangeName}
            value={name}
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__input-error name-error"></span>
        </label>

        <label className="popup__label-input">
          <input
            onChange={handleChangeDescription}
            type="text"
            className="popup__input popup__input_type_job"
            name="job"
            value={description}
            placeholder="Профессия"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__input-error job-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
