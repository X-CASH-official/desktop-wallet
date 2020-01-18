import { List } from './list.model';
import { Contact } from './contact.model';

export class ContactList extends List<Contact> {

    constructor(initialContactList: Contact[]) {
        super(initialContactList);
    }

    public addContact(name: string, address: string) {
        // We should check if the contact was already added (address is already in the contact list)
        const newContact: Contact = new Contact(this.getElementIndex(), name, address);
        this.addElement(newContact);
    }

    public modifyContact(id: number, newName: string = this.elementList[id].name, newAddress: string = this.elementList[id].address) {
        if (id >= this.getElementIndex()) {
            throw new Error("ID exceed contact list size");
        } else {
            const newContact: Contact = {
                id: id,
                name: newName,
                address: newAddress,
            }
            this.elementList[id] = newContact;
        }
    }    
}
