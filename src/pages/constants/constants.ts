import { Component } from '@angular/core';
import { ViewController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    this.send([255, 6, kp, kd, ki, 254]);
  }

  start() {
    console.log('Robot started.');
    this.send([255, 4, 1, 254]);
  }

  stop() {
    console.log('Robot stopped.');
    this.send([255, 4, 0, 254]);
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
