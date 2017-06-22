import { Component } from '@angular/core';

import { SensorsPage } from '../sensors/sensors';
import { ConstantsPage } from '../constants/constants';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ConstantsPage;
  tab2Root = SensorsPage;

  constructor() {

  }
}
