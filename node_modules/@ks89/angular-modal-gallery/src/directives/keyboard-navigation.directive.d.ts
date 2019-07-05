import { EventEmitter } from '@angular/core';
export declare class KeyboardNavigationDirective {
    isOpen: boolean;
    keyPress: EventEmitter<number>;
    /**
     * Listener to catch keyboard's events and call the right method based on the key.
     * For instance, pressing esc, this will call `closeGallery(Action.KEYBOARD)` and so on.
     * If you passed a valid `keyboardConfig` esc, right and left buttons will be customized based on your data.
     * @param e KeyboardEvent caught by the listener.
     */
    onKeyDown(e: KeyboardEvent): void;
}
