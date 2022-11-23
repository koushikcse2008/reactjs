import React from 'react';

const SolidColor = () => {
  return (
    <>
    <div className="card">
        <div className="card-body">
          <h5 className="card-title">Default Solid Color</h5>

          <div className="alert alert-primary bg-primary text-light border-0 alert-dismissible fade show" role="alert">
            A simple primary alert with solid color—check it out!
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

          <div className="alert alert-secondary bg-secondary text-light border-0 alert-dismissible fade show" role="alert">
            A simple secondary alert with solid color—check it out!
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

          <div className="alert alert-success bg-success text-light border-0 alert-dismissible fade show" role="alert">
            A simple success alert with solid color—check it out!
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

          <div className="alert alert-danger bg-danger text-light border-0 alert-dismissible fade show" role="alert">
            A simple danger alert with solid color—check it out!
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

          <div className="alert alert-warning bg-warning border-0 alert-dismissible fade show" role="alert">
            A simple warning alert with solid color—check it out!
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

          <div className="alert alert-info bg-info border-0 alert-dismissible fade show" role="alert">
            A simple info alert with solid color—check it out!
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

          <div className="alert alert-light bg-light border-0 alert-dismissible fade show" role="alert">
            A simple light alert with solid color—check it out!
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

          <div className="alert alert-dark bg-dark text-light border-0 alert-dismissible fade show" role="alert">
            A simple dark alert with solid color—check it out!
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

        </div>
      </div>
    </>
  )
}

export default SolidColor;