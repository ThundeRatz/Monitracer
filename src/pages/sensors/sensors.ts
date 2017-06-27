import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-sensors',
  templateUrl: 'sensors.html'
})
export class SensorsPage {

  teste: Array<{name: number, valor: number}>;

  constructor(public navCtrl: NavController) {
    this.teste = [
        { name: 0,  valor: 0 },
        { name: 1,  valor: 100 },
        { name: 2,  valor: 200 },
        { name: 3,  valor: 300 },
        { name: 4,  valor: 400 },
        { name: 5,  valor: 500 },
        { name: 6,  valor: 600 },
        { name: 7,  valor: 700 },
        { name: 8,  valor: 800 },
        { name: 9,  valor: 900 },
        { name: 10, valor: 1000 },
        { name: 11, valor: 1023 },
        { name: 12, valor: 1023 },
        { name: 13, valor: 1023 },
        { name: 14, valor: 1023 }
    ];
  }
}
