function ElectricDevice(name, brand){
  this.name = name;
  this.brand = brand;
}

ElectricDevice.prototype.powerOn = function(){
  console.log(`${this.name} power On`);
}

ElectricDevice.prototype.powerOff = function(){
  console.log(`${this.name} power Off`);
}

ElectricDevice.prototype.getBrand = function(){
  console.log(`${this.brand}`);
}

function Teapot(name, isScreen,  brand){
  this.name = name;
  this.isScreen = isScreen;
  this.brand = brand;
}

function Hoover(name, power, brand){
  this.name = name;
  this.power = power;
  this.brand = brand;
}

Teapot.prototype = new ElectricDevice();
Hoover.prototype = new ElectricDevice();

Hoover.prototype.wetCleaning = function(){
  console.log('wet cleaning');
}

const teapot = new Teapot('teapot', true, 'Electrolux');
const hoover = new Hoover('hoover', 1500, 'Bosh');

teapot.powerOn();
// teapot.getsteam();
teapot.getBrand();

hoover.powerOff();
hoover.getBrand();
hoover.wetCleaning();