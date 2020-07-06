import React, { Component, Fragment } from 'react';
import handleLike from '../api/handle-like';
import cn from 'classnames';

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  like(e, id) {
    e.persist();
    let like;
    if (!e.target.classList.contains('flat-card__like-icon_liked')) {
      like = true;
    } else {
      like = false;
    }
    handleLike(id, like)
      .then((res) => {
        if(!res.ok) {
          return Promise.reject(res.status);
        }
        return res.json();
      })
      .then(_ => e.target.classList.toggle('flat-card__like-icon_liked'))
      .catch(err => console.log(err));
  }

  createCard() {
    if (this.props.flatsData) {    
      const flat = this.props.flatsData.map((flat) => {
        const likeIconClass = cn({
          'flat-card__like-icon': true,
          'flat-card__like-icon_liked': flat.like ? true : false
         });
        const address = flat.attributes.address;
        const agent = flat.relationships.attributes;
        return(
          <div className="flat-card" key={flat.id}>
            <img className="flat-card__image" src={flat.attributes.photo}></img>
            <div className="flat-card__description">
              <h3 className="flat-card__title">{flat.attributes.title}</h3>
              <p className="flat-card__rooms">Количество комнат: {flat.attributes.rooms}</p>
              <p className="flat-card__address">Адрес: {address.city}, {address.street}-{address.house}, кв.{address.room}</p>
              <p className="flat-card__area">Площадь: {flat.attributes.area} {flat.attributes.unit}</p>
              <p className="flat-card__agent">Агент: {agent.last_name} {agent.first_name} {agent.middle_name}</p>
            </div>
            <button className={likeIconClass} onClick={(e) => this.like(e, flat.id)}></button>
          </div>
        );
      });
      return flat;
    }
  }

  render() {
    return(
      <Fragment>
        {this.createCard()}
      </Fragment>
    )
  }
}