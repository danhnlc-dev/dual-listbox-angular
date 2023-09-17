import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as _ from 'lodash';

type OptionsGroupType = "selected" | "unselected";

@Component({
  selector: 'app-dlb-search',
  templateUrl: './dlb-search.component.html',
  styleUrls: ['./dlb-search.component.scss']
})
export class DlbSearchComponent {
  @Input() type: OptionsGroupType;
  @Output('search') searchEvent: EventEmitter<any>;

  searchInput: string;
  setTimeoutId: any;

  constructor() {

    this.type = 'unselected';
    this.searchEvent = new EventEmitter();
    this.searchInput = '';
    this.setTimeoutId = 0;

  }

  // call when entering value on input-form
  onInput = _.debounce(() => this.searchEvent.emit({ searchInput: this.searchInput, type: this.type }), 300);

}
