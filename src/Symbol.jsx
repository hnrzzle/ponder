import React from 'react';

/*
(<span class="card-text-mana-cost">
  <abbr class="card-symbol card-symbol-1" title="one generic mana">{1}</abbr>
  <abbr class="card-symbol card-symbol-G" title="one green mana">{G}</abbr>
</span>)
*/
function Symbol({manaCost}) {
  const parseSymbol = (inputString) => {
    // Use a regular expression to match content inside curly braces
    const matches = inputString.match(/\{(.*?)\}/g);

    // Extract the content inside the curly braces and store in an array
    const symbolsArray = matches.map(match => match.slice(1, -1));

    return symbolsArray;
  }
  const parsedSymbols = parseSymbol(manaCost);

  return (
    <span className="card-text-mana-cost">
      {parsedSymbols.map((parsedSymbol, i) => (
        <abbr key={i} className={`card-symbol card-symbol-${parsedSymbol}`}>{`{${parsedSymbol}}`}</abbr>
      ))}
    </span>);
}

export default Symbol;