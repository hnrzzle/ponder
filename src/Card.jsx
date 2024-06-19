import React from 'react';
import Symbol from './Symbol';
import './Card.css';

/* TODO:
  - convert Mana cost into appropriate elements and class Names

*/

function Card ({theCard}) {
  // console.log(theCard.name);
  // console.log(theCard.imageURIs);
  const {
    name,
    releaseDate,
    imageURIs,
    manaCost,
    cardType,
    oracleText,
    keywords,
    setName,
    rarity,
  } = theCard;
  return (<>
  <h2>Today's card is <b>{theCard.name}</b></h2>
  <img src={theCard.imageURIs.art_crop} alt="This is magic art" />
  <h3>It was released on: {releaseDate}</h3>
  <h3>Its mana cost is: <Symbol manaCost={manaCost}/></h3>
  <h3>Its card type is: {cardType}</h3>
  <h3>It is from set: {setName}</h3>
  <h3>Its rarity is: {rarity}</h3>
  <p>{oracleText}</p>
  </>);
}

export default Card;