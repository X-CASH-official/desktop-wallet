import { EventEmitter, TemplateRef, ElementRef, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { TagModel } from '../../core/accessor';
import { TagRipple } from '../tag/tag-ripple.component';
import { EventLike } from '../../core/helpers/event-like';
export declare class TagComponent {
    element: ElementRef;
    renderer: Renderer2;
    private cdRef;
    /**
     * @name model {TagModel}
     */
    model: TagModel;
    /**
     * @name removable {boolean}
     */
    removable: boolean;
    /**
     * @name editable {boolean}
     */
    editable: boolean;
    /**
     * @name template {TemplateRef<any>}
     */
    template: TemplateRef<any>;
    /**
     * @name displayBy {string}
     */
    displayBy: string;
    /**
     * @name identifyBy {string}
     */
    identifyBy: string;
    /**
     * @name index {number}
     */
    index: number;
    /**
     * @name hasRipple
     */
    hasRipple: boolean;
    /**
     * @name disabled
     */
    disabled: boolean;
    /**
     * @name canAddTag
     */
    canAddTag: (tag: TagModel) => boolean;
    /**
     * @name onSelect
     */
    onSelect: EventEmitter<TagModel>;
    /**
     * @name onRemove
     */
    onRemove: EventEmitter<TagModel>;
    /**
     * @name onBlur
     */
    onBlur: EventEmitter<TagModel>;
    /**
     * @name onKeyDown
     */
    onKeyDown: EventEmitter<any>;
    /**
     * @name onTagEdited
     */
    onTagEdited: EventEmitter<TagModel>;
    /**
     * @name readonly {boolean}
     */
    readonly readonly: boolean;
    /**
     * @name editing
     */
    editing: boolean;
    /**
     * @name moving
     */
    moving: boolean;
    /**
     * @name rippleState
     */
    rippleState: string;
    /**
     * @name ripple {TagRipple}
     */
    ripple: TagRipple;
    constructor(element: ElementRef, renderer: Renderer2, cdRef: ChangeDetectorRef);
    /**
     * @name select
     */
    select($event?: MouseEvent): void;
    /**
     * @name remove
     */
    remove($event: MouseEvent): void;
    /**
     * @name focus
     */
    focus(): void;
    move(): void;
    /**
     * @name keydown
     * @param event
     */
    keydown(event: EventLike): void;
    /**
     * @name blink
     */
    blink(): void;
    /**
     * @name toggleEditMode
     */
    toggleEditMode(): void;
    /**
     * @name onBlurred
     * @param event
     */
    onBlurred(event: any): void;
    /**
     * @name getDisplayValue
     * @param item
     */
    getDisplayValue(item: TagModel): string;
    /**
     * @desc returns whether the ripple is visible or not
     * only works in Chrome
     * @name isRippleVisible
     */
    readonly isRippleVisible: boolean;
    /**
     * @name disableEditMode
     * @param $event
     */
    disableEditMode($event?: EventLike): void;
    /**
     * @name isDeleteIconVisible
     */
    isDeleteIconVisible(): boolean;
    /**
     * @name getContentEditableText
     */
    private getContentEditableText();
    /**
     * @name setContentEditableText
     * @param model
     */
    private setContentEditableText(model);
    /**
     * @name
     */
    private activateEditMode();
    /**
     * @name storeNewValue
     * @param input
     */
    private storeNewValue(input);
    /**
     * @name getContentEditable
     */
    private getContentEditable();
}
