import React from 'react';
import './results-count.style.scss';

const ResultsCount = ({ count, search }) => {

  return (
    <section className={`results-count`}>
      <p className={`text ${count ? '' : 'hide'}`}>Avem <span className='count'>{count}</span> de oportuinitatis in Romania {search ? `pentru ${search}` : ''}</p>
      <p className={`text ${count ? 'hide' : ''}`}>Ceva nu a mers bine...</p>
    </section>
  )
}

export default ResultsCount;