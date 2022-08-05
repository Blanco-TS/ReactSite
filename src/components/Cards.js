import React, {useState, useEffect} from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { ButtonIllegal } from './Button';
import { ButtonLegal } from './Button';
import { ButtonEtat } from './Button';
import './HeroSection.css';
  
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
    
    <div id="Global3">
        <div id="Global1">
        <h1 className='h1title'>Voyons voir de quel côté êtes-vous ...</h1>
        <div id="Global2">
        <div className='gauche3'>
          </div>
          <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/cards.jpg'
              text="Plutôt quelqu'un qui se range du côté de la loi ? Alors montez votre propre business et faîtes fortune !"
              label="Entreprise"
              path='/'
            />
            <CardItem
              src='images/cards3.png'
              text="Envie de rendre service et faire régner la loi dans tout Los Santos ? Qu'attendez vous.. La L.S.P.D recrute !"
              label='L.S.P.D'
              path='/'
            />
            <CardItem
              src='/images/cards5.jpg'
              text="Trop souvent oubliés mais nos médecins on en a besoin. N'attendez plus postulez et sauvez des vies !"
              label='E.M.S'
              path='/'
            />
            <CardItem
              src='images/cards4.png'
              text="Habitant de quartier souhaitant monter son gang ou plutôt homme de l'ombre ? Rien n'est impossibe !"
              label='Gang / Organisation'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/cards1.jpg'
              text='Les courses poursuite mais à la TwoSide !'
              label='Action'
              path='/'
            />
            <CardItem
              src='/images/cards2.jpg'
              text='Des véhicules imports avec du custom possible.'
              label='Véhicule'
              path='/'
            />
            <CardItem
              src='/images/cards6.jpg'
              text='Des braquages qui vous feront tourner la tête !'
              label='Action'
              path='/'
            />
          </ul>
        </div>
      </div>
          <div className='gauche4'>
          </div>
    </div>
    </div>
    <div className='cards-container'>
    <video src='/src/images/sunset.mp4' autoPlay loop muted />
      <h1>Alors, quel côté choisirez vous ?</h1>
      <div className='cards-btns'>
      <ButtonLegal
          className='btns'
          buttonStyle='btn--leg'
          buttonSize='btn--large'
        >
          LEGAL <i className='far fa-building' />
        </ButtonLegal>
        <ButtonIllegal
          className='btns'
          buttonStyle='btn--illeg'
          buttonSize='btn--large2'
        >
          ILLEGAL <i className='fa-solid fa-gun' />
        </ButtonIllegal>
        <ButtonEtat
          className='btns'
          buttonStyle='btn--etat'
          buttonSize='btn--large3'
        >
          ETAT <i className='fas fa-flag-usa' />
        </ButtonEtat>
      </div>
    </div>
</div>
  );
}

export default Cards;
