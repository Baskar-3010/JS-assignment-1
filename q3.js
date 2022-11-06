let cargoHold=[
    1138,
    'space suits',
    'parrot',
    'instruction manual',
    'metal packs',
    'space tether',
    '20 meters'
  ]
  cargoHold.splice(3,0,'keys')
  console.log(cargoHold);
  cargoHold.splice(cargoHold.indexOf('instruction manual'),1)
  console.log(cargoHold);
  cargoHold.splice(2,3,'cat','fob','string cheese')
  console.log(cargoHold);