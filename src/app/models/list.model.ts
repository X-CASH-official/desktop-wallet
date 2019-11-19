import { Item } from './item.model';

export class List<T extends Item> {
    private elementIndex: number;
    protected elementList: T[];

    constructor(initialList: T[]) {
        this.elementList = [];
        this.elementIndex = 0;

        for (let i = 0; i < initialList.length; i++) {
            this.addElement(initialList[i])
        }
    }

    public addElement(element: T): void {
        if (element.id !== this.elementIndex) {
            throw new Error("List construction error: id shift")
        }
        this.elementList.push(element);
        this.elementIndex++;
    }

    public removeElement(id: number): void {
        if (id >= this.elementIndex) {
            throw new Error("Id exceed list size");
        } else {
            this.elementList.splice(id, 1);
            this.elementIndex--;
            for (let i = id; i < this.elementIndex; i++) {
                this.elementList[i].id--;
            }
        }
    }

    public getList(): T[] {
        return this.elementList.map(x => Object.assign({}, x));
    }

    public getElementIndex(): number {
        return this.elementIndex;
    }

}