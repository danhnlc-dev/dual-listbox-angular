import { Component, Input } from "@angular/core";
import { Contact } from "./data";

@Component({
	selector: "app-contact",
	inputs: ["contact"],
	styleUrls: ["./contact.component.scss"],
	templateUrl: './contact.component.html'
})
export class ContactComponent {

	// public contact!: Contact;
	@Input() contact!: Contact;

}