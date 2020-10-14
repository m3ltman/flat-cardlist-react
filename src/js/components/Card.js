import React, { useEffect, useState } from 'react';
import changeLike from '../api/change-like';
import cn from 'classnames';

const Card = ({ flat }) => {
  const [ like, setLike ] = useState(flat.like);

  const likeHanlder = (id) => () => {
    setLike(!like);
    changeLike(id, !like);
  }

  const likeIconClasses = cn({
    'flat-card__like-icon': true,
    'flat-card__like-icon_liked': like ? true : false,
  });

  return (
    <div className="flat-card">
      <img className="flat-card__image" src={flat.attributes.photo}></img>
      <div className="flat-card__description">
        <h3 className="flat-card__title">{flat.attributes.title}</h3>
        <p className="flat-card__rooms">Количество комнат: {flat.attributes.rooms}</p>
        <p className="flat-card__address">Адрес: {flat.attributes.address.city}, {flat.attributes.address.street}-{flat.attributes.address.house}, кв.{flat.attributes.address.room}</p>
        <p className="flat-card__area">Площадь: {flat.attributes.area} {flat.attributes.unit}</p>
        <p className="flat-card__agent">Агент: {flat.relationships.attributes.last_name} {flat.relationships.attributes.first_name} {flat.relationships.attributes.middle_name}</p>
      </div>
      <button className={likeIconClasses} onClick={likeHanlder(flat.id)}></button>
    </div>
  );
}

export default Card;