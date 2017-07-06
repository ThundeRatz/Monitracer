import { Component } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-sensors',
  templateUrl: 'sensors.html'
})
export class SensorsPage {
  mac: number;
  sensores: Array<{name: number, valor: number}>;

  constructor(public navCtrl: NavController, private bt: BluetoothSerial) {
    this.sensores = [];
    for (let i = 0; i < 15; i++) {
      this.sensores.push(
        { name: i,  valor: 0 }
      );
    }
  }

  // connect(){
  //   this.bt.connect(this.mac);
  //   this.bt.subscribe();
  // }

  getSensors() {
    for (var sensor of this.sensores){
      sensor.valor=(sensor.valor + 100)%1023;
    }
  }
}
