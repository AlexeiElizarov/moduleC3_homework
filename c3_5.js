class ElectroDevice {
  constructor(name, brand){
    this.name = name;
    this.brand = brand;
  }
  powerOn(){
    console.log(this.name + ' On');
  }
  powerOff(){
    console.log(this.name + ' Off');
  }
  getBrand(){
    console.log(this.brand);
  }
}

class Teapot extends ElectroDevice {
  constructor(isScreen, name, brand){
    super(name, brand);
    this.isScreen = true;
  }
  getSteam(){
    console.log('Steam');
  }
}

class Hoover extends ElectroDevice {
  constructor(name, power, brand){
    super(name, brand);
    this.power = power;
 }
  wetCleaning(){
    console.log('wet cleaning');
  }
}

const teapot = new Teapot(true, 'teapot', 'Electrolux');
const hoover = new Hoover('hoover', 1500, 'Bosh');

teapot.powerOn();
teapot.getSteam();
teapot.getBrand();

hoover.powerOff();
hoover.getBrand();
hoover.wetCleaning();