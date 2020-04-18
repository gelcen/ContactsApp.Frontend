import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact:Contact;

  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private location: Location,
    private formBuilder: FormBuilder
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
    this.getContact();
    
  }

  getContact(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.contactService.getContact(id)
      .subscribe(contact =>  
        {
          this.contact = contact;
          this.transferToForms();
        });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.form.valid) {
      this.transferToField();
      this.contactService.updateContact(this.contact)
        .subscribe(() => this.goBack());
    }
  }

  transferToField(): void {
    this.contact.surname = this.form.controls.surname.value;
    this.contact.name = this.form.controls.name.value;
    this.contact.patronymic = this.form.controls.patronymic.value;
    this.contact.organization = this.form.controls.organization.value;
    this.contact.position  = this.form.controls.position.value;
    this.contact.email = this.form.controls.email.value;
    this.contact.phone = this.form.controls.phone.value;
  }

  transferToForms(): void {
    if (this.form) {
      this.form.setValue({
        surname : this.contact.surname,
        name : this.contact.name,
        patronymic: this.contact.patronymic,
        organization: this.contact.organization,
        position: this.contact.position,
        email: this.contact.email,
        phone: this.contact.phone
      });
    }
  }
}
