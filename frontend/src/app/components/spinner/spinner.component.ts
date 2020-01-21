import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  @HostBinding('attr.data-visible')
  @Input()
  public visible: boolean = true;
}
