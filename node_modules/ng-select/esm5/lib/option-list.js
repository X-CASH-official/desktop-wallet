/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Option } from './option';
import { Diacritics } from './diacritics';
var OptionList = /** @class */ (function () {
    function OptionList(options) {
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
        function (option) {
            /** @type {?} */
            var o = new Option(option);
            if (option.disabled) {
                o.disabled = true;
            }
            return o;
        }));
        this._hasShown = this._options.length > 0;
        this.highlight();
    }
    Object.defineProperty(OptionList.prototype, "hasShown", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasShown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "hasSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "options", {
        /** Options. **/
        get: /**
         * Options. *
         * @return {?}
         */
        function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    OptionList.prototype.getOptionsByValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.options.filter((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            return option.value === value;
        }));
    };
    Object.defineProperty(OptionList.prototype, "value", {
        /** Value. **/
        get: /**
         * Value. *
         * @return {?}
         */
        function () {
            return this.selection.map((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return option.value; }));
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            v = typeof v === 'undefined' || v === null ? [] : v;
            this.options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                option.selected = v.indexOf(option.value) > -1;
            }));
            this.updateHasSelected();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "selection", {
        /** Selection. **/
        get: /**
         * Selection. *
         * @return {?}
         */
        function () {
            return this.options.filter((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return option.selected; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} option
     * @param {?} multiple
     * @return {?}
     */
    OptionList.prototype.select = /**
     * @param {?} option
     * @param {?} multiple
     * @return {?}
     */
    function (option, multiple) {
        if (!multiple) {
            this.clearSelection();
        }
        option.selected = true;
        this.updateHasSelected();
    };
    /**
     * @param {?} option
     * @return {?}
     */
    OptionList.prototype.deselect = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        option.selected = false;
        this.updateHasSelected();
    };
    /**
     * @return {?}
     */
    OptionList.prototype.clearSelection = /**
     * @return {?}
     */
    function () {
        this.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            option.selected = false;
        }));
        this._hasSelected = false;
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.updateHasSelected = /**
     * @private
     * @return {?}
     */
    function () {
        this._hasSelected = this.options.some((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return option.selected; }));
    };
    Object.defineProperty(OptionList.prototype, "filtered", {
        /** Filter. **/
        get: /**
         * Filter. *
         * @return {?}
         */
        function () {
            return this.options.filter((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return option.shown; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "filteredEnabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.options.filter((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return option.shown && !option.disabled; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} term
     * @return {?}
     */
    OptionList.prototype.filter = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        /** @type {?} */
        var anyShown = false;
        if (term.trim() === '') {
            this.resetFilter();
            anyShown = this.options.length > 0;
        }
        else {
            this.options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                /** @type {?} */
                var l = Diacritics.strip(option.label).toUpperCase();
                /** @type {?} */
                var t = Diacritics.strip(term).toUpperCase();
                option.shown = l.indexOf(t) > -1;
                if (option.shown) {
                    anyShown = true;
                }
            }));
        }
        this.highlight();
        this._hasShown = anyShown;
        return anyShown;
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.resetFilter = /**
     * @private
     * @return {?}
     */
    function () {
        this.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            option.shown = true;
        }));
    };
    Object.defineProperty(OptionList.prototype, "highlightedOption", {
        /** Highlight. **/
        get: /**
         * Highlight. *
         * @return {?}
         */
        function () {
            return this._highlightedOption;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OptionList.prototype.highlight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var option = this.hasShownSelected() ?
            this.getFirstShownSelected() : this.getFirstShown();
        this.highlightOption(option);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    OptionList.prototype.highlightOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.clearHighlightedOption();
        if (option !== null) {
            option.highlighted = true;
            this._highlightedOption = option;
        }
    };
    /**
     * @return {?}
     */
    OptionList.prototype.highlightNextOption = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var shownEnabledOptions = this.filteredEnabled;
        /** @type {?} */
        var index = this.getHighlightedIndexFromList(shownEnabledOptions);
        if (index > -1 && index < shownEnabledOptions.length - 1) {
            this.highlightOption(shownEnabledOptions[index + 1]);
        }
    };
    /**
     * @return {?}
     */
    OptionList.prototype.highlightPreviousOption = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var shownEnabledOptions = this.filteredEnabled;
        /** @type {?} */
        var index = this.getHighlightedIndexFromList(shownEnabledOptions);
        if (index > 0) {
            this.highlightOption(shownEnabledOptions[index - 1]);
        }
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.clearHighlightedOption = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.highlightedOption !== null) {
            this.highlightedOption.highlighted = false;
            this._highlightedOption = null;
        }
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    OptionList.prototype.getHighlightedIndexFromList = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        for (var i = 0; i < options.length; i++) {
            if (options[i].highlighted) {
                return i;
            }
        }
        return -1;
    };
    /**
     * @return {?}
     */
    OptionList.prototype.getHighlightedIndex = /**
     * @return {?}
     */
    function () {
        return this.getHighlightedIndexFromList(this.filtered);
    };
    /** Util. **/
    /**
     * Util. *
     * @return {?}
     */
    OptionList.prototype.hasShownSelected = /**
     * Util. *
     * @return {?}
     */
    function () {
        return this.options.some((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            return option.shown && option.selected;
        }));
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.getFirstShown = /**
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this.options), _c = _b.next(); !_c.done; _c = _b.next()) {
                var option = _c.value;
                if (option.shown) {
                    return option;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.getFirstShownSelected = /**
     * @private
     * @return {?}
     */
    function () {
        var e_2, _a;
        try {
            for (var _b = tslib_1.__values(this.options), _c = _b.next(); !_c.done; _c = _b.next()) {
                var option = _c.value;
                if (option.shown && option.selected) {
                    return option;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return null;
    };
    // v0 and v1 are assumed not to be undefined or null.
    // v0 and v1 are assumed not to be undefined or null.
    /**
     * @param {?} v0
     * @param {?} v1
     * @return {?}
     */
    OptionList.equalValues = 
    // v0 and v1 are assumed not to be undefined or null.
    /**
     * @param {?} v0
     * @param {?} v1
     * @return {?}
     */
    function (v0, v1) {
        if (v0.length !== v1.length) {
            return false;
        }
        /** @type {?} */
        var a = v0.slice().sort();
        /** @type {?} */
        var b = v1.slice().sort();
        return a.every((/**
         * @param {?} v
         * @param {?} i
         * @return {?}
         */
        function (v, i) {
            return v === b[i];
        }));
    };
    return OptionList;
}());
export { OptionList };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWxpc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1zZWxlY3QvIiwic291cmNlcyI6WyJsaWIvb3B0aW9uLWxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBRWhDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFeEM7SUFvQkksb0JBQVksT0FBdUI7Ozs7O1FBWDNCLHVCQUFrQixHQUFXLElBQUksQ0FBQztRQWF0QyxJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3BELE9BQU8sR0FBRyxFQUFFLENBQUM7U0FDaEI7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFNOztnQkFDM0IsQ0FBQyxHQUFXLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNsQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3JCO1lBQ0QsT0FBTyxDQUFDLENBQUM7UUFDYixDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBdkJELHNCQUFJLGdDQUFROzs7O1FBQVo7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxtQ0FBVzs7OztRQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBc0JELHNCQUFJLCtCQUFPO1FBRlgsZ0JBQWdCOzs7OztRQUVoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixD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QUFDLFFBQVEsRUFBRTtvQkFDakMsT0FBTyxNQUFNLENBQUM7aUJBQ2pCO2FBQ0o7Ozs7Ozs7OztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxxREFBcUQ7Ozs7Ozs7SUFDOUMsc0JBQVc7Ozs7Ozs7SUFBbEIsVUFBbUIsRUFBaUIsRUFBRSxFQUFpQjtRQUVuRCxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUN6QixPQUFPLEtBQUssQ0FBQztTQUNoQjs7WUFFRyxDQUFDLEdBQWtCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUU7O1lBQ3BDLENBQUMsR0FBa0IsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRTtRQUV4QyxPQUFPLENBQUMsQ0FBQyxLQUFLOzs7OztRQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDaEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQTVPRCxJQTRPQzs7Ozs7OztJQTFPRyw4QkFBZ0M7Ozs7O0lBT2hDLHdDQUEwQzs7Ozs7SUFDMUMsK0JBQTJCOzs7OztJQUMzQixrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09wdGlvbn0gZnJvbSAnLi9vcHRpb24nO1xuaW1wb3J0IHtJT3B0aW9ufSBmcm9tICcuL29wdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHtEaWFjcml0aWNzfSBmcm9tICcuL2RpYWNyaXRpY3MnO1xuXG5leHBvcnQgY2xhc3MgT3B0aW9uTGlzdCB7XG5cbiAgICBwcml2YXRlIF9vcHRpb25zOiBBcnJheTxPcHRpb24+O1xuXG4gICAgLyogQ29uc2lkZXIgdXNpbmcgdGhlc2UgZm9yIHBlcmZvcm1hbmNlIGltcHJvdmVtZW50LiAqL1xuICAgIC8vIHByaXZhdGUgX3NlbGVjdGlvbjogQXJyYXk8T3B0aW9uPjtcbiAgICAvLyBwcml2YXRlIF9maWx0ZXJlZDogQXJyYXk8T3B0aW9uPjtcbiAgICAvLyBwcml2YXRlIF92YWx1ZTogQXJyYXk8c3RyaW5nPjtcblxuICAgIHByaXZhdGUgX2hpZ2hsaWdodGVkT3B0aW9uOiBPcHRpb24gPSBudWxsO1xuICAgIHByaXZhdGUgX2hhc1Nob3duOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2hhc1NlbGVjdGVkOiBib29sZWFuO1xuXG4gICAgZ2V0IGhhc1Nob3duKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFzU2hvd247XG4gICAgfVxuICAgIGdldCBoYXNTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhc1NlbGVjdGVkO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEFycmF5PElPcHRpb24+KSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJyB8fCBvcHRpb25zID09PSBudWxsKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgbGV0IG86IE9wdGlvbiA9IG5ldyBPcHRpb24ob3B0aW9uKTtcbiAgICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBvLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9oYXNTaG93biA9IHRoaXMuX29wdGlvbnMubGVuZ3RoID4gMDtcbiAgICAgICAgdGhpcy5oaWdobGlnaHQoKTtcbiAgICB9XG5cbiAgICAvKiogT3B0aW9ucy4gKiovXG5cbiAgICBnZXQgb3B0aW9ucygpOiBBcnJheTxPcHRpb24+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9uc0J5VmFsdWUodmFsdWU6IHN0cmluZyk6IEFycmF5PE9wdGlvbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcigob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLnZhbHVlID09PSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqIFZhbHVlLiAqKi9cblxuICAgIGdldCB2YWx1ZSgpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodjogQXJyYXk8c3RyaW5nPikge1xuICAgICAgICB2ID0gdHlwZW9mIHYgPT09ICd1bmRlZmluZWQnIHx8IHYgPT09IG51bGwgPyBbXSA6IHY7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdi5pbmRleE9mKG9wdGlvbi52YWx1ZSkgPiAtMTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudXBkYXRlSGFzU2VsZWN0ZWQoKTtcbiAgICB9XG5cbiAgICAvKiogU2VsZWN0aW9uLiAqKi9cblxuICAgIGdldCBzZWxlY3Rpb24oKTogQXJyYXk8T3B0aW9uPiB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIHNlbGVjdChvcHRpb246IE9wdGlvbiwgbXVsdGlwbGU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgICAgICAgdGhpcy5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudXBkYXRlSGFzU2VsZWN0ZWQoKTtcbiAgICB9XG5cbiAgICBkZXNlbGVjdChvcHRpb246IE9wdGlvbikge1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51cGRhdGVIYXNTZWxlY3RlZCgpO1xuICAgIH1cblxuICAgIGNsZWFyU2VsZWN0aW9uKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2hhc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVIYXNTZWxlY3RlZCgpIHtcbiAgICAgICAgdGhpcy5faGFzU2VsZWN0ZWQgPSB0aGlzLm9wdGlvbnMuc29tZShvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKTtcbiAgICB9XG5cbiAgICAvKiogRmlsdGVyLiAqKi9cblxuICAgIGdldCBmaWx0ZXJlZCgpOiBBcnJheTxPcHRpb24+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zaG93bik7XG4gICAgfVxuXG4gICAgZ2V0IGZpbHRlcmVkRW5hYmxlZCgpOiBBcnJheTxPcHRpb24+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zaG93biAmJiAhb3B0aW9uLmRpc2FibGVkKTtcbiAgICB9XG5cbiAgICBmaWx0ZXIodGVybTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBhbnlTaG93bjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0ZXJtLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRGaWx0ZXIoKTtcbiAgICAgICAgICAgIGFueVNob3duID0gdGhpcy5vcHRpb25zLmxlbmd0aCA+IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGw6IHN0cmluZyA9IERpYWNyaXRpY3Muc3RyaXAob3B0aW9uLmxhYmVsKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGxldCB0OiBzdHJpbmcgPSBEaWFjcml0aWNzLnN0cmlwKHRlcm0pLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnNob3duID0gbC5pbmRleE9mKHQpID4gLTE7XG5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uLnNob3duKSB7XG4gICAgICAgICAgICAgICAgICAgIGFueVNob3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oaWdobGlnaHQoKTtcbiAgICAgICAgdGhpcy5faGFzU2hvd24gPSBhbnlTaG93bjtcblxuICAgICAgICByZXR1cm4gYW55U2hvd247XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldEZpbHRlcigpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgb3B0aW9uLnNob3duID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqIEhpZ2hsaWdodC4gKiovXG5cbiAgICBnZXQgaGlnaGxpZ2h0ZWRPcHRpb24oKTogT3B0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hpZ2hsaWdodGVkT3B0aW9uO1xuICAgIH1cblxuICAgIGhpZ2hsaWdodCgpIHtcbiAgICAgICAgbGV0IG9wdGlvbjogT3B0aW9uID0gdGhpcy5oYXNTaG93blNlbGVjdGVkKCkgP1xuICAgICAgICAgICAgdGhpcy5nZXRGaXJzdFNob3duU2VsZWN0ZWQoKSA6IHRoaXMuZ2V0Rmlyc3RTaG93bigpO1xuICAgICAgICB0aGlzLmhpZ2hsaWdodE9wdGlvbihvcHRpb24pO1xuICAgIH1cblxuICAgIGhpZ2hsaWdodE9wdGlvbihvcHRpb246IE9wdGlvbikge1xuICAgICAgICB0aGlzLmNsZWFySGlnaGxpZ2h0ZWRPcHRpb24oKTtcblxuICAgICAgICBpZiAob3B0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICBvcHRpb24uaGlnaGxpZ2h0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5faGlnaGxpZ2h0ZWRPcHRpb24gPSBvcHRpb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWdobGlnaHROZXh0T3B0aW9uKCkge1xuICAgICAgICBsZXQgc2hvd25FbmFibGVkT3B0aW9ucyA9IHRoaXMuZmlsdGVyZWRFbmFibGVkO1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmdldEhpZ2hsaWdodGVkSW5kZXhGcm9tTGlzdChzaG93bkVuYWJsZWRPcHRpb25zKTtcblxuICAgICAgICBpZiAoaW5kZXggPiAtMSAmJiBpbmRleCA8IHNob3duRW5hYmxlZE9wdGlvbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRPcHRpb24oc2hvd25FbmFibGVkT3B0aW9uc1tpbmRleCArIDFdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZ2hsaWdodFByZXZpb3VzT3B0aW9uKCkge1xuICAgICAgICBsZXQgc2hvd25FbmFibGVkT3B0aW9ucyA9IHRoaXMuZmlsdGVyZWRFbmFibGVkO1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmdldEhpZ2hsaWdodGVkSW5kZXhGcm9tTGlzdChzaG93bkVuYWJsZWRPcHRpb25zKTtcblxuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodE9wdGlvbihzaG93bkVuYWJsZWRPcHRpb25zW2luZGV4IC0gMV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbGVhckhpZ2hsaWdodGVkT3B0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5oaWdobGlnaHRlZE9wdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRlZE9wdGlvbi5oaWdobGlnaHRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5faGlnaGxpZ2h0ZWRPcHRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRIaWdobGlnaHRlZEluZGV4RnJvbUxpc3Qob3B0aW9uczogQXJyYXk8T3B0aW9uPikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zW2ldLmhpZ2hsaWdodGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGdldEhpZ2hsaWdodGVkSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEhpZ2hsaWdodGVkSW5kZXhGcm9tTGlzdCh0aGlzLmZpbHRlcmVkKTtcbiAgICB9XG5cbiAgICAvKiogVXRpbC4gKiovXG5cbiAgICBoYXNTaG93blNlbGVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNvbWUoKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5zaG93biAmJiBvcHRpb24uc2VsZWN0ZWQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Rmlyc3RTaG93bigpOiBPcHRpb24ge1xuICAgICAgICBmb3IgKGxldCBvcHRpb24gb2YgdGhpcy5vcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9uLnNob3duKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEZpcnN0U2hvd25TZWxlY3RlZCgpOiBPcHRpb24ge1xuICAgICAgICBmb3IgKGxldCBvcHRpb24gb2YgdGhpcy5vcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9uLnNob3duICYmIG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gdjAgYW5kIHYxIGFyZSBhc3N1bWVkIG5vdCB0byBiZSB1bmRlZmluZWQgb3IgbnVsbC5cbiAgICBzdGF0aWMgZXF1YWxWYWx1ZXModjA6IEFycmF5PHN0cmluZz4sIHYxOiBBcnJheTxzdHJpbmc+KTogYm9vbGVhbiB7XG5cbiAgICAgICAgaWYgKHYwLmxlbmd0aCAhPT0gdjEubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYTogQXJyYXk8c3RyaW5nPiA9IHYwLnNsaWNlKCkuc29ydCgpO1xuICAgICAgICBsZXQgYjogQXJyYXk8c3RyaW5nPiA9IHYxLnNsaWNlKCkuc29ydCgpO1xuXG4gICAgICAgIHJldHVybiBhLmV2ZXJ5KCh2LCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdiA9PT0gYltpXTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19