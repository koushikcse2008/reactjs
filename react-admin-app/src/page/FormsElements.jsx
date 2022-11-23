import React from 'react';
import { Link } from 'react-router-dom';
import Advanced from '../component/core/Forms/Advanced';
import General from '../component/core/Forms/General';

const FormsElements = () => {
  return (
    <>
    <main id="main" class="main">

<div class="pagetitle">
  <h1>Form Elements</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><Link to="/">Home</Link></li>
      <li class="breadcrumb-item">Forms</li>
      <li class="breadcrumb-item active">Elements</li>
    </ol>
  </nav>
</div>

<section class="section">
  <div class="row">
    <div class="col-lg-6">
      <General />
    </div>

    <div class="col-lg-6">      
      <Advanced />
    </div>
  </div>
</section>

</main>
    </>
  )
}

export default FormsElements;