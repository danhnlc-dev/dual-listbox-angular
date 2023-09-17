import { Component, ContentChildren, Input, QueryList, forwardRef } from '@angular/core';
import { DlbOptionComponent } from '../dlb-option/dlb-option.component';
import { DlbSelectComponent } from '../dlb-select/dlb-select.component';

type OptionsGroupType = "selected" | "unselected";

@Component({
  selector: 'app-dlb-options-group',
  templateUrl: './dlb-options-group.component.html',
  styleUrls: ['./dlb-options-group.component.scss'],
  host: {
    "role": "list"
  },
  queries: {
    // CAUTION: Since the DS-OPTIONS component is a flexible container for content,
    // we have to use the "descendants" option. This way, we can locate DS-OPTION
    // instances that may be wrapped inside additional, decorative HTML.
    options: new ContentChildren(
      forwardRef(() => DlbOptionComponent),
      {
        descendants: true
      }
    )
  },
})
export class DlbOptionsGroupComponent {
  @Input() type!: OptionsGroupType;
  options!: QueryList<DlbOptionComponent>;

  private lastPendingIndex: number | null;
  private select: DlbSelectComponent;

  // initialize the dual-select options-group component.
  constructor(select: DlbSelectComponent) {

    this.select = select;
    this.lastPendingIndex = null;

  }

  // clear any pending-item settings.
  clearPending(): void {

    for (let option of this.options) {

      option.isPending = false;

    }

    this.lastPendingIndex = null;

  }


  // get the collection of values associated with pending options in this group.
  getPendingValues(): any[] {

    return this.options
      .filter(option => option.isPending)
      .map(option => option.value);

  }


  // move the given option to the other options-group list.
  moveOption(option: DlbOptionComponent): void {

    this.select.moveOption(this, option);

  }


  // get called once after the inputs have been bound for the first time.
  ngOnInit(): void {

    if (
      (this.type !== "unselected") &&
      (this.type !== "selected")
    ) {

      throw (new Error(`ds-options group must be 'unselected' or 'selected'. The value of [${this.type}] is not supported.`));

    }

    this.select.registerOptionsGroup(this);

  }


  // toggle the pending state of the given option (and possibly all of the options
  // between the given one and the last one that was toggled).
  toggleOption(option: DlbOptionComponent, isMultiToggle: boolean): void {

    // Options is a QueryList iterator, which is "array like"; but, doesn't have all
    // of the Array methods we would like to use in the toggle operation. As such,
    // let's convert the QueryList to an Array for the scope of this function.
    const optionsArray = this.options.toArray();
    const index = optionsArray.indexOf(option);

    if (index === -1) {

      return;

    }

    const isPending = option.isPending = !option.isPending;

    // If this is a multi-toggle action, set all the sibling options to the same
    // pending setting.
    if (isMultiToggle && (this.lastPendingIndex !== null)) {

      // Get the loop-boundaries for the multi-toggle (and make sure we don't go
      // beyond the scope of the current options).
      const minIndex = Math.min(Math.min(index, this.lastPendingIndex), (optionsArray.length - 1));
      const maxIndex = Math.min(Math.max(index, this.lastPendingIndex), (optionsArray.length - 1));

      for (let i = minIndex; i <= maxIndex; i++) {

        optionsArray[i].isPending = isPending;

      }

    }

    this.lastPendingIndex = index;

  }

}
