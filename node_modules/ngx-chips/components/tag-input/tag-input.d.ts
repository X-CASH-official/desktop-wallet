import { EventEmitter, Renderer2, OnInit, TemplateRef, QueryList, AfterViewInit } from '@angular/core';
import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { TagInputAccessor, TagModel } from '../../core/accessor';
import { DragProvider } from '../../core/providers/drag-provider';
import { TagInputForm } from '../tag-input-form/tag-input-form.component';
import { TagInputDropdown } from '../dropdown/tag-input-dropdown.component';
import { TagComponent } from '../tag/tag.component';
export declare class TagInputComponent extends TagInputAccessor implements OnInit, AfterViewInit {
    private readonly renderer;
    readonly dragProvider: DragProvider;
    /**
     * @name separatorKeys
     * @desc keyboard keys with which a user can separate items
     */
    separatorKeys: string[];
    /**
     * @name separatorKeyCodes
     * @desc keyboard key codes with which a user can separate items
     */
    separatorKeyCodes: number[];
    /**
     * @name placeholder
     * @desc the placeholder of the input text
     */
    placeholder: string;
    /**
     * @name secondaryPlaceholder
     * @desc placeholder to appear when the input is empty
     */
    secondaryPlaceholder: string;
    /**
     * @name maxItems
     * @desc maximum number of items that can be added
     */
    maxItems: number;
    /**
     * @name validators
     * @desc array of Validators that are used to validate the tag before it gets appended to the list
     */
    validators: ValidatorFn[];
    /**
     * @name asyncValidators
     * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
     */
    asyncValidators: AsyncValidatorFn[];
    /**
    * - if set to true, it will only possible to add items from the autocomplete
    * @name onlyFromAutocomplete
    */
    onlyFromAutocomplete: boolean;
    /**
     * @name errorMessages
     */
    errorMessages: {
        [key: string]: string;
    };
    /**
     * @name theme
     */
    theme: string;
    /**
     * @name onTextChangeDebounce
     */
    onTextChangeDebounce: number;
    /**
     * - custom id assigned to the input
     * @name id
     */
    inputId: string;
    /**
     * - custom class assigned to the input
     */
    inputClass: string;
    /**
     * - option to clear text input when the form is blurred
     * @name clearOnBlur
     */
    clearOnBlur: boolean;
    /**
     * - hideForm
     * @name clearOnBlur
     */
    hideForm: boolean;
    /**
     * @name addOnBlur
     */
    addOnBlur: boolean;
    /**
     * @name addOnPaste
     */
    addOnPaste: boolean;
    /**
     * - pattern used with the native method split() to separate patterns in the string pasted
     * @name pasteSplitPattern
     */
    pasteSplitPattern: string | RegExp;
    /**
     * @name blinkIfDupe
     */
    blinkIfDupe: boolean;
    /**
     * @name removable
     */
    removable: boolean;
    /**
     * @name editable
     */
    editable: boolean;
    /**
     * @name allowDupes
     */
    allowDupes: boolean;
    /**
     * @description if set to true, the newly added tags will be added as strings, and not objects
     * @name modelAsStrings
     */
    modelAsStrings: boolean;
    /**
     * @name trimTags
     */
    trimTags: boolean;
    /**
     * @name inputText
     */
    /**
     * @name inputText
     * @param text
     */
    inputText: string;
    /**
     * @name ripple
     */
    ripple: boolean;
    /**
     * @name tabindex
     * @desc pass through the specified tabindex to the input
     */
    tabindex: string;
    /**
     * @name disable
     */
    disable: boolean;
    /**
     * @name dragZone
     */
    dragZone: string;
    /**
     * @name onRemoving
     */
    onRemoving: (tag: TagModel) => Observable<TagModel>;
    /**
     * @name onAdding
     */
    onAdding: (tag: TagModel) => Observable<TagModel>;
    /**
     * @name animationDuration
     */
    animationDuration: {
        enter: string;
        leave: string;
    };
    /**
     * @name onAdd
     * @desc event emitted when adding a new item
     */
    onAdd: EventEmitter<TagModel>;
    /**
     * @name onRemove
     * @desc event emitted when removing an existing item
     */
    onRemove: EventEmitter<TagModel>;
    /**
     * @name onSelect
     * @desc event emitted when selecting an item
     */
    onSelect: EventEmitter<TagModel>;
    /**
     * @name onFocus
     * @desc event emitted when the input is focused
     */
    onFocus: EventEmitter<string>;
    /**
     * @name onFocus
     * @desc event emitted when the input is blurred
     */
    onBlur: EventEmitter<string>;
    /**
     * @name onTextChange
     * @desc event emitted when the input value changes
     */
    onTextChange: EventEmitter<TagModel>;
    /**
     * - output triggered when text is pasted in the form
     * @name onPaste
     */
    onPaste: EventEmitter<string>;
    /**
     * - output triggered when tag entered is not valid
     * @name onValidationError
     */
    onValidationError: EventEmitter<TagModel>;
    /**
     * - output triggered when tag is edited
     * @name onTagEdited
     */
    onTagEdited: EventEmitter<TagModel>;
    /**
     * @name dropdown
     */
    dropdown: TagInputDropdown;
    /**
     * @name template
     * @desc reference to the template if provided by the user
     */
    templates: QueryList<TemplateRef<any>>;
    /**
     * @name inputForm
     */
    inputForm: TagInputForm;
    /**
     * @name selectedTag
     * @desc reference to the current selected tag
     */
    selectedTag: TagModel | undefined;
    /**
     * @name isLoading
     */
    isLoading: boolean;
    /**
     * @name tags
     * @desc list of Element items
     */
    tags: QueryList<TagComponent>;
    /**
     * @name listeners
     * @desc array of events that get fired using @fireEvents
     */
    private listeners;
    /**
     * @description emitter for the 2-way data binding inputText value
     * @name inputTextChange
     */
    inputTextChange: EventEmitter<string>;
    /**
     * @description private variable to bind get/set
     * @name inputTextValue
     */
    inputTextValue: string;
    /**
     * @desc removes the tab index if it is set - it will be passed through to the input
     * @name tabindexAttr
     */
    readonly tabindexAttr: string;
    /**
     * @name animationMetadata
     */
    animationMetadata: {
        value: string;
        params: object;
    };
    errors: string[];
    isProgressBarVisible$: Observable<boolean>;
    constructor(renderer: Renderer2, dragProvider: DragProvider);
    /**
     * @name ngAfterViewInit
     */
    ngAfterViewInit(): void;
    /**
     * @name ngOnInit
     */
    ngOnInit(): void;
    /**
     * @name onRemoveRequested
     * @param tag
     * @param index
     */
    onRemoveRequested(tag: TagModel, index: number): Promise<TagModel>;
    /**
     * @name onAddingRequested
     * @param fromAutocomplete {boolean}
     * @param tag {TagModel}
     */
    onAddingRequested(fromAutocomplete: boolean, tag: TagModel, index?: number): Promise<TagModel>;
    /**
     * @name appendTag
     * @param tag {TagModel}
     */
    appendTag: (tag: TagModel, index?: number) => void;
    /**
     * @name createTag
     * @param model
     */
    createTag: (model: TagModel) => TagModel;
    /**
     * @name selectItem
     * @desc selects item passed as parameter as the selected tag
     * @param item
     * @param emit
     */
    selectItem(item: TagModel | undefined, emit?: boolean): void;
    /**
     * @name fireEvents
     * @desc goes through the list of the events for a given eventName, and fires each of them
     * @param eventName
     * @param $event
     */
    fireEvents(eventName: string, $event?: any): void;
    /**
     * @name handleKeydown
     * @desc handles action when the user hits a keyboard key
     * @param data
     */
    handleKeydown(data: any): void;
    onFormSubmit(): Promise<void>;
    /**
     * @name setInputValue
     * @param value
     */
    setInputValue(value: string, emitEvent?: boolean): void;
    /**
     * @name getControl
     */
    private getControl();
    /**
     * @name focus
     * @param applyFocus
     * @param displayAutocomplete
     */
    focus(applyFocus?: boolean, displayAutocomplete?: boolean): void;
    /**
     * @name blur
     */
    blur(): void;
    /**
     * @name hasErrors
     */
    hasErrors(): boolean;
    /**
     * @name isInputFocused
     */
    isInputFocused(): boolean;
    /**
     * - this is the one way I found to tell if the template has been passed and it is not
     * the template for the menu item
     * @name hasCustomTemplate
     */
    hasCustomTemplate(): boolean;
    /**
     * @name maxItemsReached
     */
    readonly maxItemsReached: boolean;
    /**
     * @name formValue
     */
    readonly formValue: string;
    /**3
     * @name onDragStarted
     * @param event
     * @param index
     */
    onDragStarted(event: DragEvent, tag: TagModel, index: number): void;
    /**
     * @name onDragOver
     * @param event
     */
    onDragOver(event: DragEvent, index?: number): void;
    /**
     * @name onTagDropped
     * @param event
     * @param index
     */
    onTagDropped(event: DragEvent, index?: number): void;
    /**
     * @name isDropping
     */
    isDropping(): boolean;
    /**
     * @name onTagBlurred
     * @param changedElement {TagModel}
     * @param index {number}
     */
    onTagBlurred(changedElement: TagModel, index: number): void;
    /**
     * @name trackBy
     * @param items
     */
    trackBy(index: number, item: TagModel): string;
    /**
     * @name updateEditedTag
     * @param tag
     */
    updateEditedTag({tag, index}: {
        tag: TagModel;
        index: number;
    }): void;
    /**
     *
     * @param tag
     * @param isFromAutocomplete
     */
    isTagValid: (tag: TagModel, fromAutocomplete?: boolean) => boolean;
    /**
     * @name moveToTag
     * @param item
     * @param direction
     */
    private moveToTag(item, direction);
    /**
     * @name isFirstTag
     * @param item {TagModel}
     */
    private isFirstTag(item);
    /**
     * @name isLastTag
     * @param item {TagModel}
     */
    private isLastTag(item);
    /**
     * @name getTagIndex
     * @param item
     */
    private getTagIndex(item);
    /**
     * @name getTagAtIndex
     * @param index
     */
    private getTagAtIndex(index);
    /**
     * @name removeItem
     * @desc removes an item from the array of the model
     * @param tag {TagModel}
     * @param index {number}
     */
    private removeItem(tag, index);
    /**
     * @name addItem
     * @desc adds the current text model to the items array
     * @param fromAutocomplete
     * @param item
     */
    private addItem(fromAutocomplete, item, index?);
    /**
     * @name setupSeparatorKeysListener
     */
    private setupSeparatorKeysListener();
    /**
     * @name setUpKeypressListeners
     */
    private setUpKeypressListeners();
    /**
     * @name setUpKeydownListeners
     */
    private setUpInputKeydownListeners();
    /**
     * @name setUpOnPasteListener
     */
    private setUpOnPasteListener();
    /**
     * @name setUpTextChangeSubscriber
     */
    private setUpTextChangeSubscriber();
    /**
     * @name setUpOnBlurSubscriber
     */
    private setUpOnBlurSubscriber();
    /**
     * @name findDupe
     * @param tag
     * @param isFromAutocomplete
     */
    private findDupe(tag, isFromAutocomplete);
    /**
     * @name onPasteCallback
     * @param data
     */
    private onPasteCallback;
    /**
     * @name setAnimationMetadata
     */
    private setAnimationMetadata();
}
