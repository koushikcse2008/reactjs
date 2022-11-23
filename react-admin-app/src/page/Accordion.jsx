import React from 'react';
import { Link } from 'react-router-dom';
import Default from '../component/core/Accordion/Default';
import Outline from '../component/core/Accordion/Outline';

const Accordion = () => {
  return (
    <>
    <main id="main" className="main">

<div className="pagetitle">
  <h1>Accordion</h1>
  <nav>
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/">Home</Link></li>
      <li className="breadcrumb-item">Components</li>
      <li className="breadcrumb-item active">Accordion</li>
    </ol>
  </nav>
</div>

<section className="section">
  <div className="row">
    
    <Default />
    <Outline />    

  </div>
</section>

</main>
    </>
  )
}

export default Accordion;