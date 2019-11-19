export interface Contact {
    id: number;
    name: string;
    address: string;
}

export class ContactList {
    private contactList: Contact[];
    private contactNumber: number;

    constructor(initialContactList: object[]) {
        this.contactList = [];
        this.contactNumber = 0;

        try {
            for (let i = 0; i < initialContactList.length; i++) {
                this.addContact(initialContactList[i]['name'], initialContactList[i]['address']);
            }
        } catch (e) {
            throw new Error("Wrong input format for ContactList constructor");
        }
    }

    public addContact(name: string, address: string) {
        const newContact: Contact = {
            id: this.contactNumber,
            name: name,
            address: address,
        }
        this.contactList.push(newContact);
        this.contactNumber++;
    }

    public modifyContact(id: number, newName: string = this.contactList[id].name, newAddress: string = this.contactList[id].address) {
        if (id > this.contactNumber) {
            throw new Error("ID exceed contact list size");
        } else {
            const newContact: Contact = {
                id: id,
                name: newName,
                address: newAddress,
            }
            this.contactList[id] = newContact;
        }
    }

    public deleteContact(id: number) {
        if (id > this.contactNumber) {
            throw new Error("ID exceed contact list size");
        } else {
            // Delete the Contact from the list
            this.contactList.splice(id, 1);
            this.contactNumber--;
            // Update all the next contacts for id/size correspondence
            for (let i = id; i < this.contactNumber; i++) {
                this.contactList[i].id--;
            }
        }
    }

    public getContactList() {
        // This is important because map creates A NEW ARRAY with the results of calling a provided function on every element in the calling array
        // The calling is cloning a new object for each object of the array
        return this.contactList.map(x => Object.assign({}, x));
    }


    
}
