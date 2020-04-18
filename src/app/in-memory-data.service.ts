import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from './models/contact';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    var contacts = [
      // {"id": 1, "surname": "Melinda", "name": "Norman", "patronymic": "Winter", "organization": "Mauris Quis Incorporated", "position": " manager", "email": "Sed.dictum.Proin@Sedid.org", "phone": "1-207-463-3208"},
      // {"id": 2, "surname": "Vivian", "name": "Finn", "patronymic": "Bradley", "organization": "Luctus Vulputate Nisi Institute", "position": "js ", "email": "scelerisque.dui@egestas.co.uk", "phone": "1-149-758-8348"},
      // {"id": 3, "surname": "Suki", "name": "Tana", "patronymic": "Amal", "organization": "Dui Foundation", "position": "js ", "email": "sed.leo@afelisullamcorper.co.uk", "phone": "1-907-218-8785"},
      // {"id": 4, "surname": "Kermit", "name": "Sawyer", "patronymic": "Remedios", "organization": "Auctor Vitae Aliquet PC", "position": " devops ", "email": "consectetuer.ipsum.nunc@placerataugue.ca", "phone": "1-788-981-8979"},
      // {"id": 5, "surname": "Alexis", "name": "Aristotle", "patronymic": "Felix", "organization": "Nunc Corp.", "position": " devops ", "email": "mauris.Morbi@Vestibulum.org", "phone": "1-750-490-4015"},
      // {"id": 6, "surname": "Yen", "name": "Hector", "patronymic": "Madaline", "organization": "Lacus Mauris LLP", "position": " tester ", "email": "libero@rutrummagnaCras.org", "phone": "1-835-238-3428"},
      // {"id": 7, "surname": "Aquila", "name": "Sylvester", "patronymic": "Nevada", "organization": "Rhoncus Ltd", "position": " c# ", "email": "enim@lacusAliquam.org", "phone": "1-624-249-5655"},
      // {"id": 8, "surname": "Lionel", "name": "Deacon", "patronymic": "Eliana", "organization": "Urna PC", "position": "js ", "email": "sem.ut.dolor@risusvariusorci.edu", "phone": "1-421-162-0686"},
      // {"id": 9, "surname": "Judah", "name": "Ishmael", "patronymic": "Julie", "organization": "Massa Quisque Porttitor Corporation", "position": " manager", "email": "pulvinar.arcu.et@blanditenim.net", "phone": "1-615-667-4753"},
      // {"id": 10, "surname": "Maggy", "name": "Alisa", "patronymic": "Darius", "organization": "Euismod Enim Etiam Ltd", "position": " tester ", "email": "sapien.Aenean.massa@elitpellentesque.edu", "phone": "1-529-592-9190"},
      // {"id": 1, "surname": "Juliet", "name": "Kenyon", "patronymic": "Kylee", "organization": "Mauris Sapien Cursus LLC", "position": " qa ", "email": "ridiculus.mus@necmalesuadaut.com", "phone": "1-357-783-8863", "user": "user "},
      { "id": 2, "surname": "Abbot", "name": "Leroy", "patronymic": "Burke", "organization": "Molestie Orci Foundation", "position": " qa ", "email": "mollis.Integer.tincidunt@massa.org", "phone": "1-916-825-3732", "user": " admin" },
      { "id": 3, "surname": "Kylynn", "name": "Regina", "patronymic": "Kane", "organization": "Malesuada Inc.", "position": " backend ", "email": "scelerisque@Aliquamvulputate.net", "phone": "1-122-371-9059", "user": " admin" },
      { "id": 4, "surname": "Geoffrey", "name": "Norman", "patronymic": "Rhonda", "organization": "Neque In Ornare Company", "position": "frontend ", "email": "sit@infaucibusorci.co.uk", "phone": "1-122-597-9001", "user": " admin" },
      { "id": 5, "surname": "Jeremy", "name": "Veda", "patronymic": "Aidan", "organization": "Vel Nisl Quisque Institute", "position": "frontend ", "email": "vel.sapien.imperdiet@variusNamporttitor.org", "phone": "1-708-875-9065", "user": "user " },
      { "id": 6, "surname": "Faith", "name": "Jason", "patronymic": "Shea", "organization": "Rhoncus Incorporated", "position": "frontend ", "email": "arcu.ac@variuseteuismod.co.uk", "phone": "1-831-602-1551", "user": "user " },
      { "id": 7, "surname": "Madison", "name": "Jaime", "patronymic": "Leroy", "organization": "Dignissim Company", "position": " backend ", "email": "ligula.Aliquam@vulputateduinec.edu", "phone": "1-456-772-8432", "user": "user " },
      { "id": 8, "surname": "Nash", "name": "Jennifer", "patronymic": "Priscilla", "organization": "Praesent Incorporated", "position": " manager", "email": "volutpat.Nulla@nonummy.edu", "phone": "1-871-801-0012", "user": " admin" },
      { "id": 9, "surname": "Quon", "name": "Leila", "patronymic": "Michael", "organization": "Posuere Enim Nisl Inc.", "position": "frontend ", "email": "pede.et.risus@estMauris.co.uk", "phone": "1-364-625-2495", "user": "user " },
      { "id": 10, "surname": "Joshua", "name": "Isaiah", "patronymic": "Vladimir", "organization": "Accumsan Interdum Libero Incorporated", "position": " backend ", "email": "faucibus.lectus.a@anteMaecenasmi.edu", "phone": "1-251-850-6591", "user": " admin" },
      { "id": 11, "surname": "Burton", "name": "Louis", "patronymic": "Gregory", "organization": "Arcu Iaculis Company", "position": "frontend ", "email": "luctus.et.ultrices@acmieleifend.edu", "phone": "1-540-205-9349", "user": " admin" },
      { "id": 12, "surname": "Craig", "name": "Brielle", "patronymic": "Caesar", "organization": "Lacus Quisque LLP", "position": " backend ", "email": "lectus.rutrum.urna@Sednec.ca", "phone": "1-256-426-7613", "user": "user " },
      { "id": 13, "surname": "Ciara", "name": "Rafael", "patronymic": "Colette", "organization": "Luctus Et Ultrices Inc.", "position": " qa ", "email": "parturient.montes@idrisus.net", "phone": "1-481-997-1151", "user": " admin" },
      { "id": 14, "surname": "Bradley", "name": "Bell", "patronymic": "Leonard", "organization": "Auctor Vitae Aliquet LLP", "position": "frontend ", "email": "vel@eueros.ca", "phone": "1-409-534-2494", "user": "user " },
      { "id": 15, "surname": "David", "name": "Jasper", "patronymic": "Travis", "organization": "Diam Institute", "position": " backend ", "email": "enim.condimentum.eget@eratvitae.co.uk", "phone": "1-902-873-5707", "user": " admin" },
    ];

    var deleted = [];

    return {contacts, deleted};
  }

  constructor() { }

  // genId(contacts: Contact[]): number {
  //   return contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) + 1 : 11;
  // }

  genId<T extends Contact>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }
}
