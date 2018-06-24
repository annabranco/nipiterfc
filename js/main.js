'use strict';

console.log('>> Ready :)');

var pages;
var formats;

function ok(a,b) {
  pages = a;
  formats = b;
}

ok("todas las páginas ya estan disponibles","solo visualización en formato móvil");

alert("En construcción.\n\nPáginas que puedes ver: " + pages + "\n\nFormatos que puedes ver: " + formats );
