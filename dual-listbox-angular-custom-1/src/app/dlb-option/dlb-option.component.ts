import { Component, Input } from '@angular/core';
import { DlbOptionsGroupComponent } from '../dlb-options-group/dlb-options-group.component';

@Component({
  selector: 'app-dlb-option',
  templateUrl: './dlb-option.component.html',
  styleUrls: ['./dlb-option.component.scss'],
  host: {
    "role": "listitem",
    "(click)": "toggle( $event )",
    "(dblclick)": "move()",
    "[class.pending]": "isPending"
  },
})
export class DlbOptionComponent {
  isPending: boolean;
  @Input() value: any;

  private optionsGroup: DlbOptionsGroupComponent;

  // I initialize the dual-select option component.
  constructor(optionsGroup: DlbOptionsGroupComponent) {

    this.optionsGroup = optionsGroup;
    this.isPending = false;
    this.value = null;

  }

  // ---
  // METHODS.
  // ---

  // I move the option to the "other" option group.
  move(): void {

    this.optionsGroup.moveOption(this);

  }


  // I toggle the pending state.
  toggle(event: MouseEvent): void {

    this.optionsGroup.toggleOption(this, event.shiftKey);

  }
}
