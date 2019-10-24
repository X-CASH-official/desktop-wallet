import { Contact } from "./contact.model";

export class ContactList {
    public contactList: Contact[] = [];
    public numberOfContact: number = 0;

    constructor(contactArray: object[]) {
        try {
            for (let i = 0; i < contactArray.length; i++) {
                this.add(contactArray[i]['name'], contactArray[i]['address']);
            }
        } catch (e) {
            throw new Error("Wrong input format for ContactList constructor");
        }
    }

    public add(name: string, address: string) {
        this.numberOfContact++;
        let contactToAdd: Contact = new Contact(this.numberOfContact, name, address)
        this.contactList.push(contactToAdd);
    }

    public modifyContact(id: number, newName: string = this.contactList[id].name, newAddress: string = this.contactList[id].address) {
        if (id > this.numberOfContact) {
            throw new Error("ID exceed contact list size");
        } else {
            this.contactList[id - 1] = new Contact(id, newName, newAddress);
        }  
    }


    
}
