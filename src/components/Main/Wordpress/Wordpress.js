import React from 'react';

const Wordpress = ({ page }) => (

  <div className="blog__outer">

    {page === 'news' ?
      <iframe className="blog__inner" src="https://nipiterfc.wordpress.com/" name="frame__embed-wordpress"></iframe>
      :
      <iframe className="blog__inner" src="https://nipiterfc.wordpress.com/contacto/" name="frame__embed-wordpress"></iframe>
    }
    <p>Tu navegador no puede ver ese contenido. Contactar soporte técnico.</p>
  </div>

);

export default Wordpress;
