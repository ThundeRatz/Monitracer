import { Component, Input } from '@angular/core';

/**
 * Generated class for the BarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'bar',
  templateUrl: 'bar.html'
})
export class BarComponent {
  
  @Input('leitura') leitura;
  @Input('nome') nome;

  constructor() {
      
  }

}
