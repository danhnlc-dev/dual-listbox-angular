import { Component, EventEmitter, Output } from '@angular/core';
import { DlbOptionsGroupComponent } from '../dlb-options-group/dlb-options-group.component';
import { DlbOptionComponent } from '../dlb-option/dlb-option.component';

@Component({
  selector: 'app-dlb-select',
  templateUrl: './dlb-select.component.html',
  styleUrls: ['./dlb-select.component.scss']
})
export class DlbSelectComponent {
  @Output('select') selectEvents: EventEmitter<any[]>;
  @Output('unselect') unselectEvents: EventEmitter<any[]>;
  @Output('searchFilter') searchFilterEvent: EventEmitter<any[]>;

  // CAUTION: I'm using the DEFINITE ASSIGNMENT ASSERTION here because the
  // ngAfterViewInit() will throw an error if the following properties have not yet
  // been registered by lower-level components (ds-options).
  private unselectedOptionsGroup!: DlbOptionsGroupComponent;
  private selectedOptionsGroup!: DlbOptionsGroupComponent;

  constructor() {

    this.selectEvents = new EventEmitter();
    this.unselectEvents = new EventEmitter();
    this.searchFilterEvent = new EventEmitter();

  }

  // get called once after the view has been initialized.
  ngAfterViewInit(): void {

    if (!this.unselectedOptionsGroup || !this.selectedOptionsGroup) {

      throw (new Error("You must provide both an 'unselected' and a 'selected' options group."));

    }

  }

  // emit an event to move the pending values from Unselected options-group to the
  // Selected options-group.
  addToSelected(): void {

    const values = this.unselectedOptionsGroup.getPendingValues();

    if (values.length) {

      this.unselectedOptionsGroup.clearPending();
      this.selectEvents.emit(values);

    }

  }

  // emit an event to move the given option from the given options-group to the other
  // options-group.
  moveOption(optionsGroup: DlbOptionsGroupComponent, option: DlbOptionComponent): void {

    const eventEmitter = (optionsGroup.type === "selected")
      ? this.unselectEvents
      : this.selectEvents
      ;
    const eventValue = [option.value];

    optionsGroup.clearPending();
    eventEmitter.emit(eventValue);

  }

  // emit an event to move the pending values from Selected options-group to the
  // Unselected options-group.
  removeFromSelected(): void {

    const values = this.selectedOptionsGroup.getPendingValues();

    if (values.length) {

      this.selectedOptionsGroup.clearPending();
      this.unselectEvents.emit(values);

    }

  }

  // register the given options-group with the current select.
  registerOptionsGroup(optionsGroup: DlbOptionsGroupComponent): void {

    if (optionsGroup.type === "unselected") {

      this.unselectedOptionsGroup = optionsGroup;

    } else {

      this.selectedOptionsGroup = optionsGroup;

    }

  }

  onHandleSearch(value: any) {

    switch (value.type) {
      case 'unselected': {

        this.unselectedOptionsGroup.clearPending();
        this.searchFilterEvent.emit(value);

        break;

      }

      case 'selected': {

        this.selectedOptionsGroup.clearPending();
        this.searchFilterEvent.emit(value);

        break;

      }

      default:
        break;
    }
  }
}
