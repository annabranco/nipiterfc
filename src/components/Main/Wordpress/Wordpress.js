import React from 'react';

const Wordpress = ({ props }) => {

  return (

    <div class="blog__outer">
      <iframe class="blog__inner" src="https://nipiterfc.wordpress.com/" name="frame__embed-wordpress">
        {/* <iframe class="blog__inner" src="lorem.html" name="frame__embed-wordpress"> */}
        <p>Tu navegador no puede ver ese contenido. Contactar soporte técnico.</p>
      </iframe>
    </div>

  );
}

export default Wordpress;