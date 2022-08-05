import React from 'react';
import { Link } from 'react-router-dom';

function StaffItem(props) {
    return (
      <>
        <li className='staff__item'>
          <Link className='staff__item__link' to={props.path}>
            <figure className='staff__item__pic-wrap' data-category={props.label}>
              <img
                className='staff__item__img'
                alt='Travel'
                src={props.src}
              />
            </figure>
            <div className='staff__item__info'>
              <h5 className='staff__item__text'>{props.text}</h5>
            </div>
          </Link>
        </li>
      </>
    );
  }
  
  export default StaffItem;