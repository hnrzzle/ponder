import React from 'react';
import Symbol from './Symbol';
import './OracleText.css';

function OracleText({oracle}) {

  /* TODO:
  */
  console.log(oracle);
  function parseOracleText(oText) {
    const wordArray = oText.split(' ');
    return wordArray;
  }

  return (
    <section className="oracleText">
      <p>
        {parseOracleText(oracle).map((word, i) => {
          // Replace line breaks with <br> tags
          const checkForLineBreak = (string) => {
            if(string.includes('\n')) {
              const lineBreakSplit = string.split('\n');
              return <><span>{lineBreakSplit[0]}</span><br/><span>{lineBreakSplit[1]}</span></>;
            }
            return <span>{string}</span>;
          }

          return word[0] === '{' ? <Symbol key={i} manaCost={word} /> : <React.Fragment key={i}>{checkForLineBreak(word)}</React.Fragment>
        })}
      </p>
    </section>
  );
}

export default OracleText;