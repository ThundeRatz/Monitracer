import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-constants',
  templateUrl: 'constants.html'
})
export class ConstantsPage {
  constants: FormGroup;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.constants = formBuilder.group({
      kp: [''],
      ki: [''],
      kd: ['']
    });
  }

  save() {
    console.log(this.constants.value['kp'])
    console.log(this.constants.value['ki'])
    console.log(this.constants.value['kd'])
  }

  start() {
      console.log('Robot started.')
      // send start signal
  }

  stop() {
      console.log('Robot stopped.')
      // send stop signal
}
}
