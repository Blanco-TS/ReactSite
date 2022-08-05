import React from 'react';
import '../../App.css';
import '../Cards.css';
import CardItem from '../CardItem';
import { motion } from "framer-motion";
import Footer from '../Footer';

function Products() {
    return (
    <motion.div initial={{width : 0}} animate={{width : "100%"}} exit={{x: window.innerWidth, transition: {duration : 0.1}}}>
    <h1 className='products'>Boutique</h1>
    <div className='cards__container'>
        <div className='cards__wrapper'>
          <h1 className='class_car'>Envie de changer de look ? Choisis un Ped !</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/tupac.jpg'
              text='Envie de faire du rap sur la West Coast ?'
              label='10 €'
              path='/services'
            />
            <CardItem
              src='images/tomcruise.jpg'
              text='Un grande fan de top-gun ? Tom est là !'
              label='10 €'
              path='/products'
            />
            <CardItem
              src='/images/mosalah.jpg'
              text='Plutôt du genre à taper dans le ballon rond ?'
              label='10 €'
              path='/sign-up'
            />
            <CardItem
              src='/images/img-home.jpg'
              text="Deçu ? Trouves celui qu'il te faut"
              label='20 €'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
      <Footer />
    </motion.div>
    
    )
}

export default Products