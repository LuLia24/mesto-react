import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUser(), api.getInitialCards()])
      .then(([userRes, cardRes]) => {
        //user
        setUserName(userRes.name);
        setUserDescription(userRes.about);
        setUserAvatar(userRes.avatar);

        //cards
        setCards(cardRes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container" onClick={props.onEditAvatar}>
          <img src={userAvatar} alt="аватар." className="profile__avatar" />
        </div>
        <div className="profile__info">
          <div className="profile__info-items">
            <h1 className="profile__title">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Изменить имя"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
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
          {cards.map((card) => {
            return <Card card={card} key={card._id} onCardClick={props.onCardClick} />;
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
