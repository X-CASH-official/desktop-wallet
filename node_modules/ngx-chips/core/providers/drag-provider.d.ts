import { TagInputComponent } from '../../components/tag-input/tag-input';
import { TagModel } from '../accessor';
export interface DraggedTag {
    index: number;
    tag: TagModel;
    zone: string;
}
export interface State {
    dragging: boolean;
    dropping: boolean;
    index: number | undefined;
}
export declare type StateProperty = keyof State;
export declare class DragProvider {
    sender: TagInputComponent;
    receiver: TagInputComponent;
    state: State;
    /**
     * @name setDraggedItem
     * @param event
     * @param tag
     */
    setDraggedItem(event: DragEvent, tag: DraggedTag): void;
    /**
     * @name getDraggedItem
     * @param event
     */
    getDraggedItem(event: DragEvent): DraggedTag | undefined;
    /**
     * @name setSender
     * @param sender
     */
    setSender(sender: TagInputComponent): void;
    /**
     * @name setReceiver
     * @param receiver
     */
    setReceiver(receiver: TagInputComponent): void;
    /**
     * @name onTagDropped
     * @param tag
     * @param indexDragged
     * @param indexDropped
     */
    onTagDropped(tag: TagModel, indexDragged: number, indexDropped?: number): void;
    /**
     * @name setState
     * @param state
     */
    setState(state: {
        [K in StateProperty]?: State[K];
    }): void;
    /**
     * @name getState
     * @param key
     */
    getState(key?: StateProperty): State | State[StateProperty];
    /**
     * @name onDragEnd
     */
    onDragEnd(): void;
}
