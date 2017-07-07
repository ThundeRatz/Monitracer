import { Component } from '@angular/core';
import { ViewController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { FormBuilder, FormGroup } from '@angular/forms';

const CMD_ST = 0;
const CMD_IN = 1;

const CMD_KP = 3;
const CMD_KI = 4;
const CMD_KD = 5;

@Component({
  selector: 'page-constants',
  templateUrl: 'constants.html'
})
export class ConstantsPage {
  constants: FormGroup;
  mac: string;
  bt_connection: any;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, public formBuilder: FormBuilder, private bt: BluetoothSerial, private loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    this.bt.enable().then(() => {
      console.log("BT enabled!");
    }, (err) => {
      console.log("BT not enabled: ", err);
    });

    this.bt.subscribe('\n').subscribe((data) => {
      console.log("Received: " + data);
    });

    this.mac = '30:14:06:16:05:47';

    this.constants = formBuilder.group({
      kp: [''],
      ki: [''],
      kd: ['']
    });
  }

  save() {
    let kp: number = this.constants.value['kp'];
    let ki: number = this.constants.value['ki'];
    let kd: number = this.constants.value['kd'];
    console.log(kp);
    console.log(ki);
    console.log(kd);
    this.send([0XFF, CMD_KP, kp >> 8, kp & 0xFF, 0Xfe]);
    this.send([0XFF, CMD_KI, ki >> 8, ki & 0xFF, 0Xfe]);
    this.send([0XFF, CMD_KD, kd >> 8, kd & 0xFF, 0Xfe]);
  }

  start() {
    console.log('Robot started.');
    this.send([0XFF, CMD_IN, CMD_IN, CMD_IN, 0Xfe]);
  }

  stop() {
    console.log('Robot stopped.');
    this.send([0XFF, CMD_ST, CMD_ST, CMD_ST, 0Xfe]);
  }

  connect() {
     let loading = this.loadingCtrl.create({
      content: 'Conectando...'
    });

    loading.present();

    this.bt_connection = this.bt.connect(this.mac);
    this.bt_connection.subscribe(() => {
      loading.dismiss();
      this.toastCtrl.create({
        message: 'Conectado com Sucesso!',
        duration: 3000
      }).present();
    }, (err) => {
      loading.dismiss();
      this.toastCtrl.create({
        message: 'A conexao falhou!',
        duration: 3000
      }).present();
      console.log("Connection failed: ", err);
    });
  }

  send(arr: number[]) {
    this.bt.write(arr).then(() => {
      console.log("Enviado: ", arr);
    }, (err) => {
      console.log("Erro ao enviar: ", arr, err);
    })
  }
}
