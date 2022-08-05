import React from 'react';
import { Link } from 'react-router-dom';

function CarItem(props) {
  return (
    <>
      <li className='voiture__item'>
        <Link className='voiture__item__link' to={props.path}>
          <figure className='voiture__item__pic-wrap' data-category={props.label}>
            <img
              className='voiture__item__img'
              alt='Travel'
              src={props.src}
            />
          </figure>
          <div className='voiture__item__info'>
            <h5 className='voiture__item__text'>{props.text}</h5>
            <h5 className='voiture__item__text'>{props.textvitesse}</h5>
            <h5 className='voiture__item__text'>{props.textcoffre}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CarItem;

