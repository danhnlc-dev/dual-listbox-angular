import { Component, Input } from '@angular/core';
import { Contact } from '../data';

@Component({
  selector: 'app-dlb-contact',
  templateUrl: './dlb-contact.component.html',
  styleUrls: ['./dlb-contact.component.scss']
})
export class DlbContactComponent {
  @Input() contact!: Contact;
}
