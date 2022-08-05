import React, {useState, useEffect} from 'react';
import './Voiture.css';
import CarItem from './VoitureItem';
import './HeroSection.css';
import Footer from './Footer';
import ParticlesBackground from './ParticleBackground';
import Fader from './Fader';
import { ButtonCompact } from './Button';

function Cards() {

  const [, setButton] = useState(true);
      const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);
  return (
    
    <div id="VoitureGlobal3">
      <ParticlesBackground/>
        <div id="VoitureGlobal1">
        <h1 className='Voitureh1title'>Sedans</h1>
        <div id="VoitureGlobal2">
        <div className='gauchev'>
        <div className='voiture-btns'>
      <ButtonCompact
          className='btns'
          buttonStyle='btn--compact'
          buttonSize='btn--voiture'
        >
          COMPACT <i className='far fa-building' />
        </ButtonCompact>
        <ButtonCompact
          className='btns'
          buttonStyle='btn--sedans'
          buttonSize='btn--voiture'
        >
          SEDANS <i className='far fa-building' />
        </ButtonCompact>
        <ButtonCompact
          className='btns'
          buttonStyle='btn--coupe'
          buttonSize='btn--voiture'
        >
          COUPE <i className='far fa-building' />
        </ButtonCompact>
        <ButtonCompact
          className='btns'
          buttonStyle='btn--suvs'
          buttonSize='btn--voiture'
        >
          SUVS <i className='far fa-building' />
        </ButtonCompact>
        <ButtonCompact
          className='btns'
          buttonStyle='btn--sport'
          buttonSize='btn--voiture'
        >
          SPORT <i className='far fa-building' />
        </ButtonCompact>
        <ButtonCompact
          className='btns'
          buttonStyle='btn--sportc'
          buttonSize='btn--voiture'
        >
          SPORT CLASSIC <i className='far fa-building' />
        </ButtonCompact>
        <ButtonCompact
          className='btns'
          buttonStyle='btn--lowrider'
          buttonSize='btn--voiture'
        >
          LOW RIDER <i className='far fa-building' />
        </ButtonCompact>
      </div>
          </div>
          <div className='voiture__container'>
        <div className='voiture__wrapper'>
          <ul className='voiture__items'>
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
          </ul>
          <ul className='voiture__items'>
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
    <h1 className='Voitureh1title'>Sedans</h1>
        <div id="VoitureGlobal2">
        <div className='gauche3'>
          </div>
          <div className='voiture__container'>
        <div className='voiture__wrapper'>
          <ul className='voiture__items'>
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
          </ul>
          <ul className='voiture__items'>
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
    <h1 className='Voitureh1title'>Sedans</h1>
        <div id="VoitureGlobal2">
        <div className='gauche3'>
          </div>
          <div className='voiture__container'>
        <div className='voiture__wrapper'>
          <ul className='voiture__items'>
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
          </ul>
          <ul className='voiture__items'>
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
    <h1 className='Voitureh1title'>Sedans</h1>
        <div id="VoitureGlobal2">
        <div className='gauche3'>
          </div>
          <div className='voiture__container'>
        <div className='voiture__wrapper'>
          <ul className='voiture__items'>
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
          </ul>
          <ul className='voiture__items'>
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
    <h1 className='Voitureh1title'>Sedans</h1>
        <div id="VoitureGlobal2">
        <div className='gauche3'>
          </div>
          <div className='voiture__container'>
        <div className='voiture__wrapper'>
          <ul className='voiture__items'>
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
          </ul>
          <ul className='voiture__items'>
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
    <h1 className='Voitureh1title'>Sedans</h1>
        <div id="VoitureGlobal2">
        <div className='gauche3'>
          </div>
          <div className='voiture__container'>
        <div className='voiture__wrapper'>
          <ul className='voiture__items'>
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
          </ul>
          <ul className='voiture__items'>
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
    <h1 className='Voitureh1title'>Sedans</h1>
        <div id="VoitureGlobal2">
        <div className='gauche3'>
          </div>
          <div className='voiture__container'>
        <div className='voiture__wrapper'>
          <ul className='voiture__items'>
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
          </ul>
          <ul className='voiture__items'>
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
            <CarItem
              src='images/cards.jpg'
              text="Prix : 20.000$"
              textvitesse="Vitesse Max : 200Kg"
              textcoffre="Coffre : 20Kg"
              label="Compact"
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
    </div>
    <Fader/>
    <Footer />
</div>

  );
}

export default Cards;
