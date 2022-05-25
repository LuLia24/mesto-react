import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element" onClick={handleClick}>
      <img src={props.card.link} alt={props.card.name} className="element__photo" />
      <button className="element__trash" type="button" aria-label="Удалить"></button>
      <div className="element__caption">
        <h2 className="element__caption-text">{props.card.name}</h2>
        <div className="element__like-wrap">
          <button className="element__button-like" type="button"></button>
          <span className="element__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
