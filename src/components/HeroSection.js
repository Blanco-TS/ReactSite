import React from 'react';
import '../App.css';
import { ButtonFivem } from './Button';
import { Button } from './Button';
import { ButtonConvaincre } from './Button'
import './HeroSection.css';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Carousel.css';


function HeroSection() {
  return (
    <Fade
  arrows={true}
  onChange={function noRefCheck(){}}
>
  <div className="each-slide-hero">
    <div>
    <div className='hero-container-1'>
      <h1>REJOIGNEZ DONC L'AVENTURE</h1>
      <p>Qu'attendez vous ?</p>
      <div className='hero-btns'>
        <ButtonFivem
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--small'
        >
          COMMENCEZ !
        </ButtonFivem>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--small'
          onClick={console.log('hey')}
        >
          REGARDER LE TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
      <img
        alt="First"
        src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      />
    </div>

  </div>
  <div className="each-slide-hero">

    <div>
    <div className='hero-container-2'>
      <h1>UN SERVEUR FAIT POUR VOUS !</h1>
      <p>Une seule limite, ah non aucune limite.</p>
    </div>
      <img
        alt="Second"
        src="https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80"
      />
    </div>
  </div>
  <div className="each-slide-hero">
    <div>
    <div className='hero-container-3'>
      <h1>L'AMUSEMENT UNE PRIORITÉ</h1>
      <p>Aucune prise de tête, même la défaite on en rigole.</p>
    </div>
      <img
        alt="Third"
        src="https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      />
    </div>

  </div>
</Fade>
  );
}

export default HeroSection;

