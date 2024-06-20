import React from 'react';
import Symbol from './Symbol';
import './OracleText.css';

function OracleText({oracle}) {
  console.log(oracle);
  function parseOracleText(oText) {
    const wordArray = oText.split(' ');
    console.log
    return wordArray;
  }

  return (
    <section className="oracleText">
      <p>
        {parseOracleText(oracle).map((word, i) => {
          // Replace line breaks with <br> tags
          const checkForLineBreak = (string) => {
            if(string.includes('\n')) {
              return <span>{string}<br/></span>;
            }
            return string;
          }

          return word[0] === '{' ? <Symbol key={i} manaCost={word} /> : <span key={i}>{checkForLineBreak(word)}</span>
        })}
      </p>
    </section>
  );
}

export default OracleText;