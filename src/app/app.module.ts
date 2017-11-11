import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { Monitracer } from './app.component';

import { SensorsPage } from '../pages/sensors/sensors';
import { ConstantsPage } from '../pages/constants/constants';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarComponent } from '../components/bar/bar';

@NgModule({
  declarations: [
    Monitracer,
    SensorsPage,
    ConstantsPage,
    TabsPage,
    BarComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Monitracer)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Monitracer,
    SensorsPage,
    ConstantsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BluetoothSerial,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
