import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Contact } from './models/contact';
import { AuthenticationService } from './authentication.service';
import { Role } from './models/role';
import { GetType } from './models/getType';

import { environment } from '../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  private contactsUrl = environment.apiUrl + '/contacts';
  private deletedUrl = environment.apiUrl + '/deletedcontacts';

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) { }

  getContacts(getType: GetType): Observable<Contact[]> {

    switch (getType) {
      case GetType.All:
        if (this.authService.currentUserValue.role === Role.Admin) {
          return this.http.get<Contact[]>(this.contactsUrl);
        }
        break;
      case GetType.Mine:
        const user = this.authService.currentUserValue.username;
        return this.http.get<Contact[]>(`${this.contactsUrl}/mine/${user}`);
    }
  }

  getDeletedContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.deletedUrl);
  }

  getContact(id: number): Observable<Contact> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.get<Contact>(url).pipe(

    );
  }

  updateContact(contact:Contact): Observable<any> {
    return this.http.put(this.contactsUrl, contact, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateContat'))
      );
  }

  deleteContact(contact: Contact): Observable<Contact> {
    const id = contact.id;
    const url = `${this.contactsUrl}/${id}`;

    return this.http.delete<Contact>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<Contact>('deleteContact'))
      );
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactsUrl, contact, this.httpOptions)
      .pipe(
        catchError(this.handleError<Contact>('addContact'))
      );
  }

  private handleError<T> (operation = 'operation', result?:T) {
    return (error:any):Observable<T> => {
      
      console.log(error);
      console.log(operation + ' failed');

      return of(result as T);
    }
  }
}
