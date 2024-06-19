import { Cards } from "scryfall-api";

// Cards.byName("Black Lotus").then(console.log);

async function cardData(cardName) {
  let massiveObj = await Cards.search(`!"${cardName}" not:reprint`).all();

  const stuffWeCareAbout = {
    name: massiveObj[0].name,
    releaseDate: massiveObj[0].released_at,
    imageURIs: massiveObj[0].image_uris,
    manaCost: massiveObj[0].mana_cost,
    cardType: massiveObj[0].type_line,
    oracleText: massiveObj[0].oracle_text,
    keywords: massiveObj[0].keywords,
    setName: massiveObj[0].set_name,
    rarity: massiveObj[0].rarity,
  };
  // console.log(stuffWeCareAbout);

  return stuffWeCareAbout;
}

// console.log(cardData("Black Lotus"));

export default cardData;
