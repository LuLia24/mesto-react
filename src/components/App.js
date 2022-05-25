import React from 'react';
// import avatar from '../images/custo.jpg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <>
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        name={'editor'}
        title={'Редактировать профиль'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText={'Сохранить'}
      >
        <fieldset className="popup__set">
          <label className="popup__label-input">
            <input
              type="text"
              className="popup__input popup__input_type_name"
              name="name"
              defaultValue=""
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__input-error name-error"></span>
          </label>

          <label className="popup__label-input">
            <input
              type="text"
              className="popup__input popup__input_type_job"
              name="job"
              defaultValue=""
              placeholder="Профессия"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__input-error job-error"></span>
          </label>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name={'add'}
        title={'Новое место'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText={'Создать'}
      >
        <fieldset className="popup__set">
          <label className="popup__label-input">
            <input
              type="text"
              className="popup__input popup__input_type_title"
              name="name"
              defaultValue=""
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
              defaultValue=""
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input-error link-error"></span>
          </label>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name={'avatar'}
        title={'Обновить аватар'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText={'Сохранить'}
      >
        <fieldset className="popup__set">
          <label className="popup__label-input">
            <input
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

      <PopupWithForm name={'del'} title={'Вы уверены?'} buttonText={'Да'}></PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
