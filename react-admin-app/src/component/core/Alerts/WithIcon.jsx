import React from 'react';

const WithIcon = () => {
  return (
    <>
    <div className="card">
        <div className="card-body">
          <h5 className="card-title">With Icon</h5>

          <div className="alert alert-primary alert-dismissible fade show" role="alert">
            <i className="bi bi-star me-1"></i>
            A simple primary alert with icon—check it out!
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

          <div className="alert alert-secondary alert-dismissible fade show" role="alert">
            <i className="bi bi-collection me-1"></i>
            A simple secondary alert with icon—check it out!
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <i className="bi bi-check-circle me-1"></i>
            A simple success alert with icon—check it out!
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <i className="bi bi-exclamation-octagon me-1"></i>
            A simple danger alert with icon—check it out!
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <i className="bi bi-exclamation-triangle me-1"></i>
            A simple warning alert with icon—check it out!
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

          <div className="alert alert-info alert-dismissible fade show" role="alert">
            <i className="bi bi-info-circle me-1"></i>
            A simple info alert with icon—check it out!
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

          <div className="alert alert-dark alert-dismissible fade show" role="alert">
            <i className="bi bi-folder me-1"></i>
            A simple dark alert with icon—check it out!
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

        </div>
      </div>
    </>
  )
}

export default WithIcon;