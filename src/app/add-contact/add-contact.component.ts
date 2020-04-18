import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contactAdded:boolean = false;

  form:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private contactService:ContactService,
    private authService: AuthenticationService
  ) {
    this.form = this.formBuilder.group({
      surname: ['', [Validators.required]],
      name: ['', [Validators.required]],
      patronymic: ['', [Validators.required]],
      organization: ['', [Validators.required]],
      position: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
  
  add(): void {
    if (this.form.valid) {
      this.contactService.addContact(this.createContact())
        .subscribe(() => this.showAddedDiv());
    }
  }

  createContact(): Contact {
      return {
        surname: this.form.controls.surname.value,
        name: this.form.controls.name.value,
        patronymic: this.form.controls.patronymic.value,
        organization: this.form.controls.organization.value,
        position:  this.form.controls.position.value,
        email: this.form.controls.email.value,
        phone: this.form.controls.phone.value,
        user: this.authService.currentUserValue.username
      } as Contact;
  }

  showAddedDiv():void {
    this.contactAdded = true;
    interval(900)
      .pipe(
        take(1)
      )
      .subscribe( r => {
        this.contactAdded = false;
        this.form.reset();
      })
  }

}
