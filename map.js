const states = {
  AGU: {
    name: 'Aguascalientes',
  },
  BCN: {
    name: 'Baja California Norte',
  },
  BCS: {
    name: 'Baja California Sur',
  },
  CAM: {
    name: 'Campeche',
  },
  CHP: {
    name: 'Chiapas',
  },
  CHH: {
    name: 'Chihuahua',
  },
  COA: {
    name: 'Coahuila',
  },
  COL: {
    name: 'Colima',
  },
  CMX: {
    name: 'Ciudad de México',
  },
  DUR: {
    name: 'Durango',
  },
  GUA: {
    name: 'Guanajuato',
  },
  GRO: {
    name: 'Guerrero',
  },
  HID: {
    name: 'Hidalgo',
  },
  JAL: {
    name: 'Jalisco',
  },
  MEX: {
    name: 'Estado de México',
  },
  MIC: {
    name: 'Michoacán',
  },
  MOR: {
    name: 'Morelos',
  },
  NAY: {
    name: 'Nayarit',
  },
  NLE: {
    name: 'Nuevo León',
  },
  OAX: {
    name: 'Oaxaca',
  },
  PUE: {
    name: 'Puebla',
  },
  QUE: {
    name: 'Querétaro',
  },
  ROO: {
    name: 'Quintana Roo',
  },
  SLP: {
    name: 'San Luis Potosi',
  },
  SIN: {
    name: 'Sinaloa',
  },
  SON: {
    name: 'Sonora',
  },
  TAB: {
    name: 'Tabasco',
  },
  TAM: {
    name: 'Tamaulipas',
  },
  TLA: {
    name: 'Tlaxcala',
  },
  VER: {
    name: 'Veracruz',
  },
  YUC: {
    name: 'Yucatán',
  },
  ZAC: {
    name: 'Zacatecas'
  },
}

function animate() {
  const urlParams = new URLSearchParams(window.location.search);
  const state = urlParams.get('state');

  if (!state) {
    return;
  }

  document.getElementById('heading').innerHTML = states[state].name;
  const path = document.getElementById(state);
  const tl = gsap.timeline({repeat: -1, yoyo: true});
  tl.to(path, {'fill': '#183f4e', duration: 2, delay: 0.5}).repeat(-1);
}

animate();
