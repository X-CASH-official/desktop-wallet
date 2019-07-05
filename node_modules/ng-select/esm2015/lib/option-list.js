/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Option } from './option';
import { Diacritics } from './diacritics';
export class OptionList {
    /**
     * @param {?} options
     */
    constructor(options) {
        /* Consider using these for performance improvement. */
        // private _selection: Array<Option>;
        // private _filtered: Array<Option>;
        // private _value: Array<string>;
        this._highlightedOption = null;
        if (typeof options === 'undefined' || options === null) {
            options = [];
        }
        this._options = options.map((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            /** @type {?} */
            let o = new Option(option);
            if (option.disabled) {
                o.disabled = true;
            }
            return o;
        }));
        this._hasShown = this._options.length > 0;
        this.highlight();
    }
    /**
     * @return {?}
     */
    get hasShown() {
        return this._hasShown;
    }
    /**
     * @return {?}
     */
    get hasSelected() {
        return this._hasSelected;
    }
    /**
     * Options. *
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getOptionsByValue(value) {
        return this.options.filter((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            return option.value === value;
        }));
    }
    /**
     * Value. *
     * @return {?}
     */
    get value() {
        return this.selection.map((/**
         * @param {?} option
         * @return {?}
         */
        option => option.value));
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        v = typeof v === 'undefined' || v === null ? [] : v;
        this.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            option.selected = v.indexOf(option.value) > -1;
        }));
        this.updateHasSelected();
    }
    /**
     * Selection. *
     * @return {?}
     */
    get selection() {
        return this.options.filter((/**
         * @param {?} option
         * @return {?}
         */
        option => option.selected));
    }
    /**
     * @param {?} option
     * @param {?} multiple
     * @return {?}
     */
    select(option, multiple) {
        if (!multiple) {
            this.clearSelection();
        }
        option.selected = true;
        this.updateHasSelected();
    }
    /**
     * @param {?} option
     * @return {?}
     */
    deselect(option) {
        option.selected = false;
        this.updateHasSelected();
    }
    /**
     * @return {?}
     */
    clearSelection() {
        this.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            option.selected = false;
        }));
        this._hasSelected = false;
    }
    /**
     * @private
     * @return {?}
     */
    updateHasSelected() {
        this._hasSelected = this.options.some((/**
         * @param {?} option
         * @return {?}
         */
        option => option.selected));
    }
    /**
     * Filter. *
     * @return {?}
     */
    get filtered() {
        return this.options.filter((/**
         * @param {?} option
         * @return {?}
         */
        option => option.shown));
    }
    /**
     * @return {?}
     */
    get filteredEnabled() {
        return this.options.filter((/**
         * @param {?} option
         * @return {?}
         */
        option => option.shown && !option.disabled));
    }
    /**
     * @param {?} term
     * @return {?}
     */
    filter(term) {
        /** @type {?} */
        let anyShown = false;
        if (term.trim() === '') {
            this.resetFilter();
            anyShown = this.options.length > 0;
        }
        else {
            this.options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            (option) => {
                /** @type {?} */
                let l = Diacritics.strip(option.label).toUpperCase();
                /** @type {?} */
                let t = Diacritics.strip(term).toUpperCase();
                option.shown = l.indexOf(t) > -1;
                if (option.shown) {
                    anyShown = true;
                }
            }));
        }
        this.highlight();
        this._hasShown = anyShown;
        return anyShown;
    }
    /**
     * @private
     * @return {?}
     */
    resetFilter() {
        this.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            option.shown = true;
        }));
    }
    /**
     * Highlight. *
     * @return {?}
     */
    get highlightedOption() {
        return this._highlightedOption;
    }
    /**
     * @return {?}
     */
    highlight() {
        /** @type {?} */
        let option = this.hasShownSelected() ?
            this.getFirstShownSelected() : this.getFirstShown();
        this.highlightOption(option);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    highlightOption(option) {
        this.clearHighlightedOption();
        if (option !== null) {
            option.highlighted = true;
            this._highlightedOption = option;
        }
    }
    /**
     * @return {?}
     */
    highlightNextOption() {
        /** @type {?} */
        let shownEnabledOptions = this.filteredEnabled;
        /** @type {?} */
        let index = this.getHighlightedIndexFromList(shownEnabledOptions);
        if (index > -1 && index < shownEnabledOptions.length - 1) {
            this.highlightOption(shownEnabledOptions[index + 1]);
        }
    }
    /**
     * @return {?}
     */
    highlightPreviousOption() {
        /** @type {?} */
        let shownEnabledOptions = this.filteredEnabled;
        /** @type {?} */
        let index = this.getHighlightedIndexFromList(shownEnabledOptions);
        if (index > 0) {
            this.highlightOption(shownEnabledOptions[index - 1]);
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearHighlightedOption() {
        if (this.highlightedOption !== null) {
            this.highlightedOption.highlighted = false;
            this._highlightedOption = null;
        }
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    getHighlightedIndexFromList(options) {
        for (let i = 0; i < options.length; i++) {
            if (options[i].highlighted) {
                return i;
            }
        }
        return -1;
    }
    /**
     * @return {?}
     */
    getHighlightedIndex() {
        return this.getHighlightedIndexFromList(this.filtered);
    }
    /**
     * Util. *
     * @return {?}
     */
    hasShownSelected() {
        return this.options.some((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            return option.shown && option.selected;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getFirstShown() {
        for (let option of this.options) {
            if (option.shown) {
                return option;
            }
        }
        return null;
    }
    /**
     * @private
     * @return {?}
     */
    getFirstShownSelected() {
        for (let option of this.options) {
            if (option.shown && option.selected) {
                return option;
            }
        }
        return null;
    }
    // v0 and v1 are assumed not to be undefined or null.
    /**
     * @param {?} v0
     * @param {?} v1
     * @return {?}
     */
    static equalValues(v0, v1) {
        if (v0.length !== v1.length) {
            return false;
        }
        /** @type {?} */
        let a = v0.slice().sort();
        /** @type {?} */
        let b = v1.slice().sort();
        return a.every((/**
         * @param {?} v
         * @param {?} i
         * @return {?}
         */
        (v, i) => {
            return v === b[i];
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    OptionList.prototype._options;
    /**
     * @type {?}
     * @private
     */
    OptionList.prototype._highlightedOption;
    /**
     * @type {?}
     * @private
     */
    OptionList.prototype._hasShown;
    /**
     * @type {?}
     * @private
     */
    OptionList.prototype._hasSelected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWxpc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1zZWxlY3QvIiwic291cmNlcyI6WyJsaWIvb3B0aW9uLWxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFFaEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUV4QyxNQUFNLE9BQU8sVUFBVTs7OztJQW9CbkIsWUFBWSxPQUF1Qjs7Ozs7UUFYM0IsdUJBQWtCLEdBQVcsSUFBSSxDQUFDO1FBYXRDLElBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDcEQsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUNoQjtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFOztnQkFDL0IsQ0FBQyxHQUFXLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNsQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3JCO1lBQ0QsT0FBTyxDQUFDLENBQUM7UUFDYixDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBdkJELElBQUksUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDOzs7O0lBQ0QsSUFBSSxXQUFXO1FBQ1gsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBc0JELElBQUksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELGlCQUFpQixD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O1lBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjs7Ozs7O0lBMU9HLDhCQUFnQzs7Ozs7SUFPaEMsd0NBQTBDOzs7OztJQUMxQywrQkFBMkI7Ozs7O0lBQzNCLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T3B0aW9ufSBmcm9tICcuL29wdGlvbic7XG5pbXBvcnQge0lPcHRpb259IGZyb20gJy4vb3B0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQge0RpYWNyaXRpY3N9IGZyb20gJy4vZGlhY3JpdGljcyc7XG5cbmV4cG9ydCBjbGFzcyBPcHRpb25MaXN0IHtcblxuICAgIHByaXZhdGUgX29wdGlvbnM6IEFycmF5PE9wdGlvbj47XG5cbiAgICAvKiBDb25zaWRlciB1c2luZyB0aGVzZSBmb3IgcGVyZm9ybWFuY2UgaW1wcm92ZW1lbnQuICovXG4gICAgLy8gcHJpdmF0ZSBfc2VsZWN0aW9uOiBBcnJheTxPcHRpb24+O1xuICAgIC8vIHByaXZhdGUgX2ZpbHRlcmVkOiBBcnJheTxPcHRpb24+O1xuICAgIC8vIHByaXZhdGUgX3ZhbHVlOiBBcnJheTxzdHJpbmc+O1xuXG4gICAgcHJpdmF0ZSBfaGlnaGxpZ2h0ZWRPcHRpb246IE9wdGlvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSBfaGFzU2hvd246IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfaGFzU2VsZWN0ZWQ6IGJvb2xlYW47XG5cbiAgICBnZXQgaGFzU2hvd24oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNTaG93bjtcbiAgICB9XG4gICAgZ2V0IGhhc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFzU2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogQXJyYXk8SU9wdGlvbj4pIHtcblxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBsZXQgbzogT3B0aW9uID0gbmV3IE9wdGlvbihvcHRpb24pO1xuICAgICAgICAgICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIG8uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2hhc1Nob3duID0gdGhpcy5fb3B0aW9ucy5sZW5ndGggPiAwO1xuICAgICAgICB0aGlzLmhpZ2hsaWdodCgpO1xuICAgIH1cblxuICAgIC8qKiBPcHRpb25zLiAqKi9cblxuICAgIGdldCBvcHRpb25zKCk6IEFycmF5PE9wdGlvbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgICB9XG5cbiAgICBnZXRPcHRpb25zQnlWYWx1ZSh2YWx1ZTogc3RyaW5nKTogQXJyYXk8T3B0aW9uPiB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24udmFsdWUgPT09IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiogVmFsdWUuICoqL1xuXG4gICAgZ2V0IHZhbHVlKCk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb24ubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpO1xuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2OiBBcnJheTxzdHJpbmc+KSB7XG4gICAgICAgIHYgPSB0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcgfHwgdiA9PT0gbnVsbCA/IFtdIDogdjtcblxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB2LmluZGV4T2Yob3B0aW9uLnZhbHVlKSA+IC0xO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVIYXNTZWxlY3RlZCgpO1xuICAgIH1cblxuICAgIC8qKiBTZWxlY3Rpb24uICoqL1xuXG4gICAgZ2V0IHNlbGVjdGlvbigpOiBBcnJheTxPcHRpb24+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgc2VsZWN0KG9wdGlvbjogT3B0aW9uLCBtdWx0aXBsZTogYm9vbGVhbikge1xuICAgICAgICBpZiAoIW11bHRpcGxlKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVIYXNTZWxlY3RlZCgpO1xuICAgIH1cblxuICAgIGRlc2VsZWN0KG9wdGlvbjogT3B0aW9uKSB7XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVwZGF0ZUhhc1NlbGVjdGVkKCk7XG4gICAgfVxuXG4gICAgY2xlYXJTZWxlY3Rpb24oKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5faGFzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUhhc1NlbGVjdGVkKCkge1xuICAgICAgICB0aGlzLl9oYXNTZWxlY3RlZCA9IHRoaXMub3B0aW9ucy5zb21lKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIC8qKiBGaWx0ZXIuICoqL1xuXG4gICAgZ2V0IGZpbHRlcmVkKCk6IEFycmF5PE9wdGlvbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNob3duKTtcbiAgICB9XG5cbiAgICBnZXQgZmlsdGVyZWRFbmFibGVkKCk6IEFycmF5PE9wdGlvbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNob3duICYmICFvcHRpb24uZGlzYWJsZWQpO1xuICAgIH1cblxuICAgIGZpbHRlcih0ZXJtOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGFueVNob3duOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRlcm0udHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgdGhpcy5yZXNldEZpbHRlcigpO1xuICAgICAgICAgICAgYW55U2hvd24gPSB0aGlzLm9wdGlvbnMubGVuZ3RoID4gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbDogc3RyaW5nID0gRGlhY3JpdGljcy5zdHJpcChvcHRpb24ubGFiZWwpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgbGV0IHQ6IHN0cmluZyA9IERpYWNyaXRpY3Muc3RyaXAodGVybSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2hvd24gPSBsLmluZGV4T2YodCkgPiAtMTtcblxuICAgICAgICAgICAgICAgIGlmIChvcHRpb24uc2hvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgYW55U2hvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhpZ2hsaWdodCgpO1xuICAgICAgICB0aGlzLl9oYXNTaG93biA9IGFueVNob3duO1xuXG4gICAgICAgIHJldHVybiBhbnlTaG93bjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0RmlsdGVyKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBvcHRpb24uc2hvd24gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiogSGlnaGxpZ2h0LiAqKi9cblxuICAgIGdldCBoaWdobGlnaHRlZE9wdGlvbigpOiBPcHRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5faGlnaGxpZ2h0ZWRPcHRpb247XG4gICAgfVxuXG4gICAgaGlnaGxpZ2h0KCkge1xuICAgICAgICBsZXQgb3B0aW9uOiBPcHRpb24gPSB0aGlzLmhhc1Nob3duU2VsZWN0ZWQoKSA/XG4gICAgICAgICAgICB0aGlzLmdldEZpcnN0U2hvd25TZWxlY3RlZCgpIDogdGhpcy5nZXRGaXJzdFNob3duKCk7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0T3B0aW9uKG9wdGlvbik7XG4gICAgfVxuXG4gICAgaGlnaGxpZ2h0T3B0aW9uKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgICAgIHRoaXMuY2xlYXJIaWdobGlnaHRlZE9wdGlvbigpO1xuXG4gICAgICAgIGlmIChvcHRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIG9wdGlvbi5oaWdobGlnaHRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9oaWdobGlnaHRlZE9wdGlvbiA9IG9wdGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZ2hsaWdodE5leHRPcHRpb24oKSB7XG4gICAgICAgIGxldCBzaG93bkVuYWJsZWRPcHRpb25zID0gdGhpcy5maWx0ZXJlZEVuYWJsZWQ7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ2V0SGlnaGxpZ2h0ZWRJbmRleEZyb21MaXN0KHNob3duRW5hYmxlZE9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChpbmRleCA+IC0xICYmIGluZGV4IDwgc2hvd25FbmFibGVkT3B0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodE9wdGlvbihzaG93bkVuYWJsZWRPcHRpb25zW2luZGV4ICsgMV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlnaGxpZ2h0UHJldmlvdXNPcHRpb24oKSB7XG4gICAgICAgIGxldCBzaG93bkVuYWJsZWRPcHRpb25zID0gdGhpcy5maWx0ZXJlZEVuYWJsZWQ7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ2V0SGlnaGxpZ2h0ZWRJbmRleEZyb21MaXN0KHNob3duRW5hYmxlZE9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0T3B0aW9uKHNob3duRW5hYmxlZE9wdGlvbnNbaW5kZXggLSAxXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNsZWFySGlnaGxpZ2h0ZWRPcHRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmhpZ2hsaWdodGVkT3B0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodGVkT3B0aW9uLmhpZ2hsaWdodGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9oaWdobGlnaHRlZE9wdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEhpZ2hsaWdodGVkSW5kZXhGcm9tTGlzdChvcHRpb25zOiBBcnJheTxPcHRpb24+KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnNbaV0uaGlnaGxpZ2h0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgZ2V0SGlnaGxpZ2h0ZWRJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SGlnaGxpZ2h0ZWRJbmRleEZyb21MaXN0KHRoaXMuZmlsdGVyZWQpO1xuICAgIH1cblxuICAgIC8qKiBVdGlsLiAqKi9cblxuICAgIGhhc1Nob3duU2VsZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc29tZSgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLnNob3duICYmIG9wdGlvbi5zZWxlY3RlZDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRGaXJzdFNob3duKCk6IE9wdGlvbiB7XG4gICAgICAgIGZvciAobGV0IG9wdGlvbiBvZiB0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb24uc2hvd24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Rmlyc3RTaG93blNlbGVjdGVkKCk6IE9wdGlvbiB7XG4gICAgICAgIGZvciAobGV0IG9wdGlvbiBvZiB0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb24uc2hvd24gJiYgb3B0aW9uLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyB2MCBhbmQgdjEgYXJlIGFzc3VtZWQgbm90IHRvIGJlIHVuZGVmaW5lZCBvciBudWxsLlxuICAgIHN0YXRpYyBlcXVhbFZhbHVlcyh2MDogQXJyYXk8c3RyaW5nPiwgdjE6IEFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcblxuICAgICAgICBpZiAodjAubGVuZ3RoICE9PSB2MS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhOiBBcnJheTxzdHJpbmc+ID0gdjAuc2xpY2UoKS5zb3J0KCk7XG4gICAgICAgIGxldCBiOiBBcnJheTxzdHJpbmc+ID0gdjEuc2xpY2UoKS5zb3J0KCk7XG5cbiAgICAgICAgcmV0dXJuIGEuZXZlcnkoKHYsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2ID09PSBiW2ldO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=