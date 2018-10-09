import React from 'react';

const Wordpress = ({ page }) => {

  return (

    <div class="blog__outer">

      {page === 'news' ?
        <iframe class="blog__inner" src="https://nipiterfc.wordpress.com/" name="frame__embed-wordpress"></iframe>
        :
        <iframe class="blog__inner" src="https://nipiterfc.wordpress.com/contacto/" name="frame__embed-wordpress"></iframe>
      }
      <p>Tu navegador no puede ver ese contenido. Contactar soporte técnico.</p>
    </div>

  );
}

export default Wordpress;