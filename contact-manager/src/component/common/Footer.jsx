import React from 'react';

const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();
  return (
    <>
    <div className="bg-dark text-white p-2 text-center rounded-bottom">All rights reserved {year}.</div>
    </>
  )
}

export default Footer;