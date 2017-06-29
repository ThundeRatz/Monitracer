import { Component } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-sensors',
  templateUrl: 'sensors.html'
})
export class SensorsPage {
  bt: any;
  mac: number;
  sensores: Array<{name: number, valor: number}>;

  constructor(public navCtrl: NavController, private bts: BluetoothSerial) {
    this.bt = bts.enable();
    this.mac = 12
    this.sensores = [
        { name: 0,  valor: 0 },
        { name: 1,  valor: 0 },
        { name: 2,  valor: 0 },
        { name: 3,  valor: 0 },
        { name: 4,  valor: 0 },
        { name: 5,  valor: 0 },
        { name: 6,  valor: 0 },
        { name: 7,  valor: 0 },
        { name: 8,  valor: 0 },
        { name: 9,  valor: 0 },
        { name: 10, valor: 0 },
        { name: 11, valor: 0 },
        { name: 12, valor: 0 },
        { name: 13, valor: 0 },
        { name: 14, valor: 0 }
    ];
  }
  connect(){
    this.bt.connect(this.mac);
    this.bt.subscribe();
  }
  getSensors() {
    for (var sensor of this.sensores){
      sensor.valor=(sensor.valor + 100)%1023;
    }
  }
}
