import React from 'react';
import './Staff.css';
import './test.css';
import StaffItem from './StaffItem';

function Staff() {
  return (
    <div id="Global1">
    <h1 className='h1title'>Qui sommes nous ?</h1>
    <div id="Global2">
    <div className='staff__container'>
    <div className='staff__wrapper'>
<ul className='staff__items'>
        <StaffItem
          src='images/gfx1.png'
          text='Blanco Juan | Sentoryu#3821'
          label="Développeur"
          path='/'
        />
        <StaffItem
          src='images/Ma_tete_3.0.png'
          text='George Gambas | LaGambas#0598'
          label='Graphiste'
          path='/'
        />
        <StaffItem
          src='images/gfx3.png'
          text='Diego Garcia | Garcia#3384'
          label='Community Manager'
          path='/'
        />
       
      </ul>
      <ul className='staff__items'>
        <StaffItem
          src='images/gfx4.png'
          text='Ting Tang | h e l i c o o o o o o p t e r#5530'
          label="Mappeur / Modérateur"
          path='/'
        />
        <StaffItem
          src='images/gfx5.png'
          text='Hisoke Takatunike | himWasabi#2375'
          label='Mappeur / Modérateur'
          path='/'
        />
        <StaffItem
          src='images/50.png'
          text='Recrutement ouvert (Modérateur / Helpeur)'
          label='Recrutement'
          path='/'
        />
       
      </ul>
      </div>
      
      </div>
      <div className='gauche'>
        <p>L'équipe TwoSide est avant toute chose un groupe d'amis, le développement du serveur nous a prit plusieurs mois car on cherchait à attendre notre idéal en terme de RP. Toutes personnes au seins de l'équipe avez un rôle bien précis dans le développement du serveur mais on avait tous le même but : un serveur qui nous ressemble et dans lequel les joueurs peuvent se projeter.</p> 
      </div>
      </div>
</div>
  );
}

export default Staff;
