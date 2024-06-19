import { Cards } from "scryfall-api";

// Cards.byName("Black Lotus").then(console.log);

async function cardData(cardName) {
  let massiveObj = await Cards.search(`!"${cardName}" not:reprint`).all();
  console.log(massiveObj);

  return massiveObj;
}

// console.log(cardData("Black Lotus"));

export default cardData;
