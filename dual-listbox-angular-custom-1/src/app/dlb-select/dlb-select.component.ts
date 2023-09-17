import { Component, EventEmitter, Output } from '@angular/core';
import { DlbOptionsGroupComponent } from '../dlb-options-group/dlb-options-group.component';
import { DlbOptionComponent } from '../dlb-option/dlb-option.component';

@Component({
  selector: 'app-dlb-select',
  templateUrl: './dlb-select.component.html',
  styleUrls: ['./dlb-select.component.scss']
})
export class DlbSelectComponent {
  @Output('select') selectEvents = new EventEmitter<any[]>();
  @Output('unselect') unselectEvents = new EventEmitter<any[]>();

  // CAUTION: I'm using the DEFINITE ASSIGNMENT ASSERTION here because the
  // ngAfterViewInit() will throw an error if the following properties have not yet
  // been registered by lower-level components (ds-options).
  private unselectedOptionsGroup!: DlbOptionsGroupComponent;
  private selectedOptionsGroup!: DlbOptionsGroupComponent;

  // I initialize the dual-select select component.
  constructor() {

    // this.selectEvents = new EventEmitter();
    // this.unselectEvents = new EventEmitter();

  }

  // ---
  // PUBLIC METHODS.
  // ---

  // I get called once after the view has been initialized.
  ngAfterViewInit(): void {

    if (!this.unselectedOptionsGroup || !this.selectedOptionsGroup) {

      throw (new Error("You must provide both an 'unselected' and a 'selected' options group."));

    }

  }


  // I emit an event to move the pending values from Unselected options-group to the
  // Selected options-group.
  addToSelected(): void {

    var values = this.unselectedOptionsGroup.getPendingValues();

    if (values.length) {

      this.unselectedOptionsGroup.clearPending();
      this.selectEvents.emit(values);

    }

  }


  // I emit an event to move the given option from the given options-group to the other
  // options-group.
  moveOption(optionsGroup: DlbOptionsGroupComponent, option: DlbOptionComponent): void {

    var eventEmitter = (optionsGroup.type === "selected")
      ? this.unselectEvents
      : this.selectEvents
      ;
    var eventValue = [option.value];

    optionsGroup.clearPending();
    eventEmitter.emit(eventValue);

  }


  // I emit an event to move the pending values from Selected options-group to the
  // Unselected options-group.
  removeFromSelected(): void {

    var values = this.selectedOptionsGroup.getPendingValues();

    if (values.length) {

      this.selectedOptionsGroup.clearPending();
      this.unselectEvents.emit(values);

    }

  }


  // I register the given options-group with the current select.
  registerOptionsGroup(optionsGroup: DlbOptionsGroupComponent): void {

    if (optionsGroup.type === "unselected") {

      this.unselectedOptionsGroup = optionsGroup;

    } else {

      this.selectedOptionsGroup = optionsGroup;

    }

  }
}
