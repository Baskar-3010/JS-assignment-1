let cargoHold=['oxygen tanks','space suits','parrot','instruction manual','metal packs','slinky','security blankets']
cargoHold.splice(5,1,'space tether')
console.log(cargoHold)
console.log(cargoHold.pop())
console.log(cargoHold);
console.log(cargoHold.shift())
console.log(cargoHold);
cargoHold.unshift(1138)
cargoHold.push('20 meters')
console.log(cargoHold);
console.log(`${cargoHold} length is ${cargoHold.length}`);