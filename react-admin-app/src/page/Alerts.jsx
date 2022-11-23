import React from 'react';
import Default from '../component/core/Alerts/Default';
import HeadingSeparator from '../component/core/Alerts/HeadingSeparator';
import OutLined from '../component/core/Alerts/OutLined';
import SolidColor from '../component/core/Alerts/SolidColor';
import WithIcon from '../component/core/Alerts/WithIcon';
import { Link } from 'react-router-dom';

const Alerts = () => {
  return (
    <>
    <main id="main" className="main">

<div className="pagetitle">
  <h1>Alerts</h1>
  <nav>
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/">Home</Link></li>
      <li className="breadcrumb-item">Components</li>
      <li className="breadcrumb-item active">Alerts</li>
    </ol>
  </nav>
</div>

<section className="section">
  <div className="row">
    <div className="col-lg-6">
      <Default />
      <WithIcon />
      <OutLined />
    </div>

    <div className="col-lg-6">
      <SolidColor />
      <HeadingSeparator />        
    </div>
  </div>
</section>

</main>
    </>
  )
}

export default Alerts;