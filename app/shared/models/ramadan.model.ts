import { RamadanI } from '../interfaces/ramadan-i';

export class Ramadan implements RamadanI {
    nbPlaces:Number;
    city: string;
    description: string;
    latitude: Number;
    longitude:Number;

  constructor(o?: Partial<Ramadan>) {
    if (o){
      Object.assign(this, o);
    }
  }

  hola(){
      console.log('test hola')
  }
}
