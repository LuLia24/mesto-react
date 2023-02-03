import React from 'react';
// import api from '../utils/api';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container" onClick={props.onEditAvatar}>
          <img src={currentUser.avatar} alt="аватар." className="profile__avatar" />
        </div>
        <div className="profile__info">
          <div className="profile__info-items">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Изменить имя"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__container">
          {props.cards.map((card) => {
            return (
              <Card
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
                card={card}
                key={card._id}
                onCardClick={props.onCardClick}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
