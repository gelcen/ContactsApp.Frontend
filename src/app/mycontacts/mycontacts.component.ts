import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../contact.service';
import { GetType } from '../models/getType';

@Component({
  selector: 'app-mycontacts',
  templateUrl: './mycontacts.component.html',
  styleUrls: ['./mycontacts.component.css']
})
export class MycontactsComponent implements OnInit {

  contacts:Contact[];

  constructor(
    private contactService:ContactService
  ) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts():void {
    this.contactService.getContacts(GetType.Mine)
      .subscribe(contacts => this.contacts = contacts);
  }

  onDelete(contact: Contact): void {
    this.contacts = this.contacts.filter(c => c !== contact);
    this.contactService.deleteContact(contact).subscribe();
  }

}
