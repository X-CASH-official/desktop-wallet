import { List } from './list.model';
import { Xcashdpops } from './xcashdpops.model';

export class XcashdpopsList extends List<Xcashdpops> {

    constructor(initialXcashdpopsList: Xcashdpops[]) {
        super(initialXcashdpopsList);
    }

    public addContact(name: string, address: string) {
        // We should check if the contact was already added (address is already in the contact list)
        const newXcashdpops: Xcashdpops = new Xcashdpops(this.getElementIndex(), name, address);
        this.addElement(newXcashdpops);
    }

    public modifyContact(id: number, newName: string = this.elementList[id].name, newAddress: string = this.elementList[id].address) {
        if (id >= this.getElementIndex()) {
            throw new Error("ID exceed contact list size");
        } else {
            const newXcashdpops: Xcashdpops = {
                id: id,
                name: newName,
                address: newAddress,
            }
            this.elementList[id] = newXcashdpops;
        }
    }    
}
