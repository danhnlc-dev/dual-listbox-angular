import { Component } from '@angular/core';
import { Contact } from './data';
import { contacts as sampleContacts } from "./data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  contacts: Contact[];
  selectedContacts: Contact[];
  selectedContactsFilter: Contact[];
  unselectedContacts: Contact[];
  unselectedContactsFilter: Contact[];

  constructor() {

    this.contacts = sampleContacts;
    this.unselectedContacts = this.contacts.slice().sort(this.sortContactOperator);
    this.selectedContacts = [];
    this.selectedContactsFilter = [];
    this.unselectedContactsFilter = [];

    this.assignToFilterList();

  }

  // move the given contacts from the unselected list to the selected list.
  addToSelectedContacts(changeContacts: Contact[]): void {

    // Remove the contacts from the Unselected.
    this.unselectedContacts = this.unselectedContacts.filter(
      (contact) => {

        return (!changeContacts.includes(contact));

      }
    );

    // move them over to the Selected list(s).
    this.selectedContacts = changeContacts.concat(this.selectedContacts);

    this.assignToFilterList();

  }


  // move the given contacts from the selected list to the unselected list.
  removeFromSelectedContacts(changeContacts: Contact[]): void {

    // Remove the contacts from the Selected list.
    this.selectedContacts = this.selectedContacts.filter(
      (contact) => {

        return (!changeContacts.includes(contact));

      }
    );

    // move them over to the Unselected list.
    this.unselectedContacts = this.unselectedContacts
      .concat(changeContacts)
      .sort(this.sortContactOperator);


    this.assignToFilterList();
  }

  // filter items to get contacts with condition
  handleFilterContacts(condition: any) {
    switch (condition.type) {
      case 'unselected': {

        if (!condition.searchInput) {

          // reset list
          this.unselectedContactsFilter = this.unselectedContacts;


          return;

        }

        this.unselectedContactsFilter = this.unselectedContacts.filter(contact => contact.fieldBlock.includes(condition.searchInput));

        break;

      }

      case 'selected': {

        if (!condition.searchInput) {

          // reset list
          this.selectedContactsFilter = this.selectedContacts;


          return;

        }

        this.selectedContactsFilter = this.selectedContacts.filter(contact => contact.fieldBlock.includes(condition.searchInput));
        break;

      }

      default:
        break;
    }
  }

  // pass to filter list(s)
  private assignToFilterList() {
    this.selectedContactsFilter = this.selectedContacts;
    this.unselectedContactsFilter = this.unselectedContacts;
  }

  // sort operator for the contacts collection.
  private sortContactOperator(a: Contact, b: Contact): number {

    return (a.name.localeCompare(b.name));

  }

}
