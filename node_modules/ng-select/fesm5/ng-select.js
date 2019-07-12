import { Component, ViewEncapsulation, ElementRef, Input, Output, ViewChild, EventEmitter, forwardRef, ContentChild, HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { __values } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Option = /** @class */ (function () {
    function Option(option) {
        this.wrappedOption = option;
        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.shown = true;
    }
    Object.defineProperty(Option.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.wrappedOption.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            return this.wrappedOption.label;
        },
        enumerable: true,
        configurable: true
    });
    return Option;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Diacritics = /** @class */ (function () {
    function Diacritics() {
    }
    /**
     * @param {?} text
     * @return {?}
     */
    Diacritics.strip = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        var _this = this;
        /** @type {?} */
        var match = (/**
         * @param {?} a
         * @return {?}
         */
        function (a) {
            return _this.DIACRITICS[a] || a;
        });
        return text.replace(/[^\u0000-\u007E]/g, match);
    };
    Diacritics.DIACRITICS = {
        '\u24B6': 'A',
        '\uFF21': 'A',
        '\u00C0': 'A',
        '\u00C1': 'A',
        '\u00C2': 'A',
        '\u1EA6': 'A',
        '\u1EA4': 'A',
        '\u1EAA': 'A',
        '\u1EA8': 'A',
        '\u00C3': 'A',
        '\u0100': 'A',
        '\u0102': 'A',
        '\u1EB0': 'A',
        '\u1EAE': 'A',
        '\u1EB4': 'A',
        '\u1EB2': 'A',
        '\u0226': 'A',
        '\u01E0': 'A',
        '\u00C4': 'A',
        '\u01DE': 'A',
        '\u1EA2': 'A',
        '\u00C5': 'A',
        '\u01FA': 'A',
        '\u01CD': 'A',
        '\u0200': 'A',
        '\u0202': 'A',
        '\u1EA0': 'A',
        '\u1EAC': 'A',
        '\u1EB6': 'A',
        '\u1E00': 'A',
        '\u0104': 'A',
        '\u023A': 'A',
        '\u2C6F': 'A',
        '\uA732': 'AA',
        '\u00C6': 'AE',
        '\u01FC': 'AE',
        '\u01E2': 'AE',
        '\uA734': 'AO',
        '\uA736': 'AU',
        '\uA738': 'AV',
        '\uA73A': 'AV',
        '\uA73C': 'AY',
        '\u24B7': 'B',
        '\uFF22': 'B',
        '\u1E02': 'B',
        '\u1E04': 'B',
        '\u1E06': 'B',
        '\u0243': 'B',
        '\u0182': 'B',
        '\u0181': 'B',
        '\u24B8': 'C',
        '\uFF23': 'C',
        '\u0106': 'C',
        '\u0108': 'C',
        '\u010A': 'C',
        '\u010C': 'C',
        '\u00C7': 'C',
        '\u1E08': 'C',
        '\u0187': 'C',
        '\u023B': 'C',
        '\uA73E': 'C',
        '\u24B9': 'D',
        '\uFF24': 'D',
        '\u1E0A': 'D',
        '\u010E': 'D',
        '\u1E0C': 'D',
        '\u1E10': 'D',
        '\u1E12': 'D',
        '\u1E0E': 'D',
        '\u0110': 'D',
        '\u018B': 'D',
        '\u018A': 'D',
        '\u0189': 'D',
        '\uA779': 'D',
        '\u01F1': 'DZ',
        '\u01C4': 'DZ',
        '\u01F2': 'Dz',
        '\u01C5': 'Dz',
        '\u24BA': 'E',
        '\uFF25': 'E',
        '\u00C8': 'E',
        '\u00C9': 'E',
        '\u00CA': 'E',
        '\u1EC0': 'E',
        '\u1EBE': 'E',
        '\u1EC4': 'E',
        '\u1EC2': 'E',
        '\u1EBC': 'E',
        '\u0112': 'E',
        '\u1E14': 'E',
        '\u1E16': 'E',
        '\u0114': 'E',
        '\u0116': 'E',
        '\u00CB': 'E',
        '\u1EBA': 'E',
        '\u011A': 'E',
        '\u0204': 'E',
        '\u0206': 'E',
        '\u1EB8': 'E',
        '\u1EC6': 'E',
        '\u0228': 'E',
        '\u1E1C': 'E',
        '\u0118': 'E',
        '\u1E18': 'E',
        '\u1E1A': 'E',
        '\u0190': 'E',
        '\u018E': 'E',
        '\u24BB': 'F',
        '\uFF26': 'F',
        '\u1E1E': 'F',
        '\u0191': 'F',
        '\uA77B': 'F',
        '\u24BC': 'G',
        '\uFF27': 'G',
        '\u01F4': 'G',
        '\u011C': 'G',
        '\u1E20': 'G',
        '\u011E': 'G',
        '\u0120': 'G',
        '\u01E6': 'G',
        '\u0122': 'G',
        '\u01E4': 'G',
        '\u0193': 'G',
        '\uA7A0': 'G',
        '\uA77D': 'G',
        '\uA77E': 'G',
        '\u24BD': 'H',
        '\uFF28': 'H',
        '\u0124': 'H',
        '\u1E22': 'H',
        '\u1E26': 'H',
        '\u021E': 'H',
        '\u1E24': 'H',
        '\u1E28': 'H',
        '\u1E2A': 'H',
        '\u0126': 'H',
        '\u2C67': 'H',
        '\u2C75': 'H',
        '\uA78D': 'H',
        '\u24BE': 'I',
        '\uFF29': 'I',
        '\u00CC': 'I',
        '\u00CD': 'I',
        '\u00CE': 'I',
        '\u0128': 'I',
        '\u012A': 'I',
        '\u012C': 'I',
        '\u0130': 'I',
        '\u00CF': 'I',
        '\u1E2E': 'I',
        '\u1EC8': 'I',
        '\u01CF': 'I',
        '\u0208': 'I',
        '\u020A': 'I',
        '\u1ECA': 'I',
        '\u012E': 'I',
        '\u1E2C': 'I',
        '\u0197': 'I',
        '\u24BF': 'J',
        '\uFF2A': 'J',
        '\u0134': 'J',
        '\u0248': 'J',
        '\u24C0': 'K',
        '\uFF2B': 'K',
        '\u1E30': 'K',
        '\u01E8': 'K',
        '\u1E32': 'K',
        '\u0136': 'K',
        '\u1E34': 'K',
        '\u0198': 'K',
        '\u2C69': 'K',
        '\uA740': 'K',
        '\uA742': 'K',
        '\uA744': 'K',
        '\uA7A2': 'K',
        '\u24C1': 'L',
        '\uFF2C': 'L',
        '\u013F': 'L',
        '\u0139': 'L',
        '\u013D': 'L',
        '\u1E36': 'L',
        '\u1E38': 'L',
        '\u013B': 'L',
        '\u1E3C': 'L',
        '\u1E3A': 'L',
        '\u0141': 'L',
        '\u023D': 'L',
        '\u2C62': 'L',
        '\u2C60': 'L',
        '\uA748': 'L',
        '\uA746': 'L',
        '\uA780': 'L',
        '\u01C7': 'LJ',
        '\u01C8': 'Lj',
        '\u24C2': 'M',
        '\uFF2D': 'M',
        '\u1E3E': 'M',
        '\u1E40': 'M',
        '\u1E42': 'M',
        '\u2C6E': 'M',
        '\u019C': 'M',
        '\u24C3': 'N',
        '\uFF2E': 'N',
        '\u01F8': 'N',
        '\u0143': 'N',
        '\u00D1': 'N',
        '\u1E44': 'N',
        '\u0147': 'N',
        '\u1E46': 'N',
        '\u0145': 'N',
        '\u1E4A': 'N',
        '\u1E48': 'N',
        '\u0220': 'N',
        '\u019D': 'N',
        '\uA790': 'N',
        '\uA7A4': 'N',
        '\u01CA': 'NJ',
        '\u01CB': 'Nj',
        '\u24C4': 'O',
        '\uFF2F': 'O',
        '\u00D2': 'O',
        '\u00D3': 'O',
        '\u00D4': 'O',
        '\u1ED2': 'O',
        '\u1ED0': 'O',
        '\u1ED6': 'O',
        '\u1ED4': 'O',
        '\u00D5': 'O',
        '\u1E4C': 'O',
        '\u022C': 'O',
        '\u1E4E': 'O',
        '\u014C': 'O',
        '\u1E50': 'O',
        '\u1E52': 'O',
        '\u014E': 'O',
        '\u022E': 'O',
        '\u0230': 'O',
        '\u00D6': 'O',
        '\u022A': 'O',
        '\u1ECE': 'O',
        '\u0150': 'O',
        '\u01D1': 'O',
        '\u020C': 'O',
        '\u020E': 'O',
        '\u01A0': 'O',
        '\u1EDC': 'O',
        '\u1EDA': 'O',
        '\u1EE0': 'O',
        '\u1EDE': 'O',
        '\u1EE2': 'O',
        '\u1ECC': 'O',
        '\u1ED8': 'O',
        '\u01EA': 'O',
        '\u01EC': 'O',
        '\u00D8': 'O',
        '\u01FE': 'O',
        '\u0186': 'O',
        '\u019F': 'O',
        '\uA74A': 'O',
        '\uA74C': 'O',
        '\u01A2': 'OI',
        '\uA74E': 'OO',
        '\u0222': 'OU',
        '\u24C5': 'P',
        '\uFF30': 'P',
        '\u1E54': 'P',
        '\u1E56': 'P',
        '\u01A4': 'P',
        '\u2C63': 'P',
        '\uA750': 'P',
        '\uA752': 'P',
        '\uA754': 'P',
        '\u24C6': 'Q',
        '\uFF31': 'Q',
        '\uA756': 'Q',
        '\uA758': 'Q',
        '\u024A': 'Q',
        '\u24C7': 'R',
        '\uFF32': 'R',
        '\u0154': 'R',
        '\u1E58': 'R',
        '\u0158': 'R',
        '\u0210': 'R',
        '\u0212': 'R',
        '\u1E5A': 'R',
        '\u1E5C': 'R',
        '\u0156': 'R',
        '\u1E5E': 'R',
        '\u024C': 'R',
        '\u2C64': 'R',
        '\uA75A': 'R',
        '\uA7A6': 'R',
        '\uA782': 'R',
        '\u24C8': 'S',
        '\uFF33': 'S',
        '\u1E9E': 'S',
        '\u015A': 'S',
        '\u1E64': 'S',
        '\u015C': 'S',
        '\u1E60': 'S',
        '\u0160': 'S',
        '\u1E66': 'S',
        '\u1E62': 'S',
        '\u1E68': 'S',
        '\u0218': 'S',
        '\u015E': 'S',
        '\u2C7E': 'S',
        '\uA7A8': 'S',
        '\uA784': 'S',
        '\u24C9': 'T',
        '\uFF34': 'T',
        '\u1E6A': 'T',
        '\u0164': 'T',
        '\u1E6C': 'T',
        '\u021A': 'T',
        '\u0162': 'T',
        '\u1E70': 'T',
        '\u1E6E': 'T',
        '\u0166': 'T',
        '\u01AC': 'T',
        '\u01AE': 'T',
        '\u023E': 'T',
        '\uA786': 'T',
        '\uA728': 'TZ',
        '\u24CA': 'U',
        '\uFF35': 'U',
        '\u00D9': 'U',
        '\u00DA': 'U',
        '\u00DB': 'U',
        '\u0168': 'U',
        '\u1E78': 'U',
        '\u016A': 'U',
        '\u1E7A': 'U',
        '\u016C': 'U',
        '\u00DC': 'U',
        '\u01DB': 'U',
        '\u01D7': 'U',
        '\u01D5': 'U',
        '\u01D9': 'U',
        '\u1EE6': 'U',
        '\u016E': 'U',
        '\u0170': 'U',
        '\u01D3': 'U',
        '\u0214': 'U',
        '\u0216': 'U',
        '\u01AF': 'U',
        '\u1EEA': 'U',
        '\u1EE8': 'U',
        '\u1EEE': 'U',
        '\u1EEC': 'U',
        '\u1EF0': 'U',
        '\u1EE4': 'U',
        '\u1E72': 'U',
        '\u0172': 'U',
        '\u1E76': 'U',
        '\u1E74': 'U',
        '\u0244': 'U',
        '\u24CB': 'V',
        '\uFF36': 'V',
        '\u1E7C': 'V',
        '\u1E7E': 'V',
        '\u01B2': 'V',
        '\uA75E': 'V',
        '\u0245': 'V',
        '\uA760': 'VY',
        '\u24CC': 'W',
        '\uFF37': 'W',
        '\u1E80': 'W',
        '\u1E82': 'W',
        '\u0174': 'W',
        '\u1E86': 'W',
        '\u1E84': 'W',
        '\u1E88': 'W',
        '\u2C72': 'W',
        '\u24CD': 'X',
        '\uFF38': 'X',
        '\u1E8A': 'X',
        '\u1E8C': 'X',
        '\u24CE': 'Y',
        '\uFF39': 'Y',
        '\u1EF2': 'Y',
        '\u00DD': 'Y',
        '\u0176': 'Y',
        '\u1EF8': 'Y',
        '\u0232': 'Y',
        '\u1E8E': 'Y',
        '\u0178': 'Y',
        '\u1EF6': 'Y',
        '\u1EF4': 'Y',
        '\u01B3': 'Y',
        '\u024E': 'Y',
        '\u1EFE': 'Y',
        '\u24CF': 'Z',
        '\uFF3A': 'Z',
        '\u0179': 'Z',
        '\u1E90': 'Z',
        '\u017B': 'Z',
        '\u017D': 'Z',
        '\u1E92': 'Z',
        '\u1E94': 'Z',
        '\u01B5': 'Z',
        '\u0224': 'Z',
        '\u2C7F': 'Z',
        '\u2C6B': 'Z',
        '\uA762': 'Z',
        '\u24D0': 'a',
        '\uFF41': 'a',
        '\u1E9A': 'a',
        '\u00E0': 'a',
        '\u00E1': 'a',
        '\u00E2': 'a',
        '\u1EA7': 'a',
        '\u1EA5': 'a',
        '\u1EAB': 'a',
        '\u1EA9': 'a',
        '\u00E3': 'a',
        '\u0101': 'a',
        '\u0103': 'a',
        '\u1EB1': 'a',
        '\u1EAF': 'a',
        '\u1EB5': 'a',
        '\u1EB3': 'a',
        '\u0227': 'a',
        '\u01E1': 'a',
        '\u00E4': 'a',
        '\u01DF': 'a',
        '\u1EA3': 'a',
        '\u00E5': 'a',
        '\u01FB': 'a',
        '\u01CE': 'a',
        '\u0201': 'a',
        '\u0203': 'a',
        '\u1EA1': 'a',
        '\u1EAD': 'a',
        '\u1EB7': 'a',
        '\u1E01': 'a',
        '\u0105': 'a',
        '\u2C65': 'a',
        '\u0250': 'a',
        '\uA733': 'aa',
        '\u00E6': 'ae',
        '\u01FD': 'ae',
        '\u01E3': 'ae',
        '\uA735': 'ao',
        '\uA737': 'au',
        '\uA739': 'av',
        '\uA73B': 'av',
        '\uA73D': 'ay',
        '\u24D1': 'b',
        '\uFF42': 'b',
        '\u1E03': 'b',
        '\u1E05': 'b',
        '\u1E07': 'b',
        '\u0180': 'b',
        '\u0183': 'b',
        '\u0253': 'b',
        '\u24D2': 'c',
        '\uFF43': 'c',
        '\u0107': 'c',
        '\u0109': 'c',
        '\u010B': 'c',
        '\u010D': 'c',
        '\u00E7': 'c',
        '\u1E09': 'c',
        '\u0188': 'c',
        '\u023C': 'c',
        '\uA73F': 'c',
        '\u2184': 'c',
        '\u24D3': 'd',
        '\uFF44': 'd',
        '\u1E0B': 'd',
        '\u010F': 'd',
        '\u1E0D': 'd',
        '\u1E11': 'd',
        '\u1E13': 'd',
        '\u1E0F': 'd',
        '\u0111': 'd',
        '\u018C': 'd',
        '\u0256': 'd',
        '\u0257': 'd',
        '\uA77A': 'd',
        '\u01F3': 'dz',
        '\u01C6': 'dz',
        '\u24D4': 'e',
        '\uFF45': 'e',
        '\u00E8': 'e',
        '\u00E9': 'e',
        '\u00EA': 'e',
        '\u1EC1': 'e',
        '\u1EBF': 'e',
        '\u1EC5': 'e',
        '\u1EC3': 'e',
        '\u1EBD': 'e',
        '\u0113': 'e',
        '\u1E15': 'e',
        '\u1E17': 'e',
        '\u0115': 'e',
        '\u0117': 'e',
        '\u00EB': 'e',
        '\u1EBB': 'e',
        '\u011B': 'e',
        '\u0205': 'e',
        '\u0207': 'e',
        '\u1EB9': 'e',
        '\u1EC7': 'e',
        '\u0229': 'e',
        '\u1E1D': 'e',
        '\u0119': 'e',
        '\u1E19': 'e',
        '\u1E1B': 'e',
        '\u0247': 'e',
        '\u025B': 'e',
        '\u01DD': 'e',
        '\u24D5': 'f',
        '\uFF46': 'f',
        '\u1E1F': 'f',
        '\u0192': 'f',
        '\uA77C': 'f',
        '\u24D6': 'g',
        '\uFF47': 'g',
        '\u01F5': 'g',
        '\u011D': 'g',
        '\u1E21': 'g',
        '\u011F': 'g',
        '\u0121': 'g',
        '\u01E7': 'g',
        '\u0123': 'g',
        '\u01E5': 'g',
        '\u0260': 'g',
        '\uA7A1': 'g',
        '\u1D79': 'g',
        '\uA77F': 'g',
        '\u24D7': 'h',
        '\uFF48': 'h',
        '\u0125': 'h',
        '\u1E23': 'h',
        '\u1E27': 'h',
        '\u021F': 'h',
        '\u1E25': 'h',
        '\u1E29': 'h',
        '\u1E2B': 'h',
        '\u1E96': 'h',
        '\u0127': 'h',
        '\u2C68': 'h',
        '\u2C76': 'h',
        '\u0265': 'h',
        '\u0195': 'hv',
        '\u24D8': 'i',
        '\uFF49': 'i',
        '\u00EC': 'i',
        '\u00ED': 'i',
        '\u00EE': 'i',
        '\u0129': 'i',
        '\u012B': 'i',
        '\u012D': 'i',
        '\u00EF': 'i',
        '\u1E2F': 'i',
        '\u1EC9': 'i',
        '\u01D0': 'i',
        '\u0209': 'i',
        '\u020B': 'i',
        '\u1ECB': 'i',
        '\u012F': 'i',
        '\u1E2D': 'i',
        '\u0268': 'i',
        '\u0131': 'i',
        '\u24D9': 'j',
        '\uFF4A': 'j',
        '\u0135': 'j',
        '\u01F0': 'j',
        '\u0249': 'j',
        '\u24DA': 'k',
        '\uFF4B': 'k',
        '\u1E31': 'k',
        '\u01E9': 'k',
        '\u1E33': 'k',
        '\u0137': 'k',
        '\u1E35': 'k',
        '\u0199': 'k',
        '\u2C6A': 'k',
        '\uA741': 'k',
        '\uA743': 'k',
        '\uA745': 'k',
        '\uA7A3': 'k',
        '\u24DB': 'l',
        '\uFF4C': 'l',
        '\u0140': 'l',
        '\u013A': 'l',
        '\u013E': 'l',
        '\u1E37': 'l',
        '\u1E39': 'l',
        '\u013C': 'l',
        '\u1E3D': 'l',
        '\u1E3B': 'l',
        '\u017F': 'l',
        '\u0142': 'l',
        '\u019A': 'l',
        '\u026B': 'l',
        '\u2C61': 'l',
        '\uA749': 'l',
        '\uA781': 'l',
        '\uA747': 'l',
        '\u01C9': 'lj',
        '\u24DC': 'm',
        '\uFF4D': 'm',
        '\u1E3F': 'm',
        '\u1E41': 'm',
        '\u1E43': 'm',
        '\u0271': 'm',
        '\u026F': 'm',
        '\u24DD': 'n',
        '\uFF4E': 'n',
        '\u01F9': 'n',
        '\u0144': 'n',
        '\u00F1': 'n',
        '\u1E45': 'n',
        '\u0148': 'n',
        '\u1E47': 'n',
        '\u0146': 'n',
        '\u1E4B': 'n',
        '\u1E49': 'n',
        '\u019E': 'n',
        '\u0272': 'n',
        '\u0149': 'n',
        '\uA791': 'n',
        '\uA7A5': 'n',
        '\u01CC': 'nj',
        '\u24DE': 'o',
        '\uFF4F': 'o',
        '\u00F2': 'o',
        '\u00F3': 'o',
        '\u00F4': 'o',
        '\u1ED3': 'o',
        '\u1ED1': 'o',
        '\u1ED7': 'o',
        '\u1ED5': 'o',
        '\u00F5': 'o',
        '\u1E4D': 'o',
        '\u022D': 'o',
        '\u1E4F': 'o',
        '\u014D': 'o',
        '\u1E51': 'o',
        '\u1E53': 'o',
        '\u014F': 'o',
        '\u022F': 'o',
        '\u0231': 'o',
        '\u00F6': 'o',
        '\u022B': 'o',
        '\u1ECF': 'o',
        '\u0151': 'o',
        '\u01D2': 'o',
        '\u020D': 'o',
        '\u020F': 'o',
        '\u01A1': 'o',
        '\u1EDD': 'o',
        '\u1EDB': 'o',
        '\u1EE1': 'o',
        '\u1EDF': 'o',
        '\u1EE3': 'o',
        '\u1ECD': 'o',
        '\u1ED9': 'o',
        '\u01EB': 'o',
        '\u01ED': 'o',
        '\u00F8': 'o',
        '\u01FF': 'o',
        '\u0254': 'o',
        '\uA74B': 'o',
        '\uA74D': 'o',
        '\u0275': 'o',
        '\u01A3': 'oi',
        '\u0223': 'ou',
        '\uA74F': 'oo',
        '\u24DF': 'p',
        '\uFF50': 'p',
        '\u1E55': 'p',
        '\u1E57': 'p',
        '\u01A5': 'p',
        '\u1D7D': 'p',
        '\uA751': 'p',
        '\uA753': 'p',
        '\uA755': 'p',
        '\u24E0': 'q',
        '\uFF51': 'q',
        '\u024B': 'q',
        '\uA757': 'q',
        '\uA759': 'q',
        '\u24E1': 'r',
        '\uFF52': 'r',
        '\u0155': 'r',
        '\u1E59': 'r',
        '\u0159': 'r',
        '\u0211': 'r',
        '\u0213': 'r',
        '\u1E5B': 'r',
        '\u1E5D': 'r',
        '\u0157': 'r',
        '\u1E5F': 'r',
        '\u024D': 'r',
        '\u027D': 'r',
        '\uA75B': 'r',
        '\uA7A7': 'r',
        '\uA783': 'r',
        '\u24E2': 's',
        '\uFF53': 's',
        '\u00DF': 's',
        '\u015B': 's',
        '\u1E65': 's',
        '\u015D': 's',
        '\u1E61': 's',
        '\u0161': 's',
        '\u1E67': 's',
        '\u1E63': 's',
        '\u1E69': 's',
        '\u0219': 's',
        '\u015F': 's',
        '\u023F': 's',
        '\uA7A9': 's',
        '\uA785': 's',
        '\u1E9B': 's',
        '\u24E3': 't',
        '\uFF54': 't',
        '\u1E6B': 't',
        '\u1E97': 't',
        '\u0165': 't',
        '\u1E6D': 't',
        '\u021B': 't',
        '\u0163': 't',
        '\u1E71': 't',
        '\u1E6F': 't',
        '\u0167': 't',
        '\u01AD': 't',
        '\u0288': 't',
        '\u2C66': 't',
        '\uA787': 't',
        '\uA729': 'tz',
        '\u24E4': 'u',
        '\uFF55': 'u',
        '\u00F9': 'u',
        '\u00FA': 'u',
        '\u00FB': 'u',
        '\u0169': 'u',
        '\u1E79': 'u',
        '\u016B': 'u',
        '\u1E7B': 'u',
        '\u016D': 'u',
        '\u00FC': 'u',
        '\u01DC': 'u',
        '\u01D8': 'u',
        '\u01D6': 'u',
        '\u01DA': 'u',
        '\u1EE7': 'u',
        '\u016F': 'u',
        '\u0171': 'u',
        '\u01D4': 'u',
        '\u0215': 'u',
        '\u0217': 'u',
        '\u01B0': 'u',
        '\u1EEB': 'u',
        '\u1EE9': 'u',
        '\u1EEF': 'u',
        '\u1EED': 'u',
        '\u1EF1': 'u',
        '\u1EE5': 'u',
        '\u1E73': 'u',
        '\u0173': 'u',
        '\u1E77': 'u',
        '\u1E75': 'u',
        '\u0289': 'u',
        '\u24E5': 'v',
        '\uFF56': 'v',
        '\u1E7D': 'v',
        '\u1E7F': 'v',
        '\u028B': 'v',
        '\uA75F': 'v',
        '\u028C': 'v',
        '\uA761': 'vy',
        '\u24E6': 'w',
        '\uFF57': 'w',
        '\u1E81': 'w',
        '\u1E83': 'w',
        '\u0175': 'w',
        '\u1E87': 'w',
        '\u1E85': 'w',
        '\u1E98': 'w',
        '\u1E89': 'w',
        '\u2C73': 'w',
        '\u24E7': 'x',
        '\uFF58': 'x',
        '\u1E8B': 'x',
        '\u1E8D': 'x',
        '\u24E8': 'y',
        '\uFF59': 'y',
        '\u1EF3': 'y',
        '\u00FD': 'y',
        '\u0177': 'y',
        '\u1EF9': 'y',
        '\u0233': 'y',
        '\u1E8F': 'y',
        '\u00FF': 'y',
        '\u1EF7': 'y',
        '\u1E99': 'y',
        '\u1EF5': 'y',
        '\u01B4': 'y',
        '\u024F': 'y',
        '\u1EFF': 'y',
        '\u24E9': 'z',
        '\uFF5A': 'z',
        '\u017A': 'z',
        '\u1E91': 'z',
        '\u017C': 'z',
        '\u017E': 'z',
        '\u1E93': 'z',
        '\u1E95': 'z',
        '\u01B6': 'z',
        '\u0225': 'z',
        '\u0240': 'z',
        '\u2C6C': 'z',
        '\uA763': 'z',
        '\u0386': '\u0391',
        '\u0388': '\u0395',
        '\u0389': '\u0397',
        '\u038A': '\u0399',
        '\u03AA': '\u0399',
        '\u038C': '\u039F',
        '\u038E': '\u03A5',
        '\u03AB': '\u03A5',
        '\u038F': '\u03A9',
        '\u03AC': '\u03B1',
        '\u03AD': '\u03B5',
        '\u03AE': '\u03B7',
        '\u03AF': '\u03B9',
        '\u03CA': '\u03B9',
        '\u0390': '\u03B9',
        '\u03CC': '\u03BF',
        '\u03CD': '\u03C5',
        '\u03CB': '\u03C5',
        '\u03B0': '\u03C5',
        '\u03C9': '\u03C9',
        '\u03C2': '\u03C3'
    };
    return Diacritics;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            for (var _b = __values(this.options), _c = _b.next(); !_c.done; _c = _b.next()) {
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
            for (var _b = __values(this.options), _c = _b.next(); !_c.done; _c = _b.next()) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectDropdownComponent = /** @class */ (function () {
    function SelectDropdownComponent(hostElement) {
        this.hostElement = hostElement;
        this.optionClicked = new EventEmitter();
        this.optionsListClick = new EventEmitter();
        this.singleFilterClick = new EventEmitter();
        this.singleFilterFocus = new EventEmitter();
        this.singleFilterInput = new EventEmitter();
        this.singleFilterKeydown = new EventEmitter();
        this.disabledColor = '#fff';
        this.disabledTextColor = '9e9e9e';
    }
    /** Event handlers. **/
    /**
     * Event handlers. *
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngOnInit = /**
     * Event handlers. *
     * @return {?}
     */
    function () {
        this.optionsReset();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('optionList')) {
            this.optionsReset();
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.moveHighlightedIntoView();
        if (!this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionsListClick = /**
     * @return {?}
     */
    function () {
        this.optionsListClick.emit(null);
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterClick = /**
     * @return {?}
     */
    function () {
        this.singleFilterClick.emit(null);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.singleFilterInput.emit(event.target.value);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.singleFilterKeydown.emit(event);
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterFocus = /**
     * @return {?}
     */
    function () {
        this.singleFilterFocus.emit(null);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionsWheel = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleOptionsWheel(event);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionMouseover = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.optionList.highlightOption(option);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionClick = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.optionClicked.emit(option);
    };
    /** Initialization. **/
    /**
     * Initialization. *
     * @private
     * @return {?}
     */
    SelectDropdownComponent.prototype.optionsReset = /**
     * Initialization. *
     * @private
     * @return {?}
     */
    function () {
        this.optionList.filter('');
        this.optionList.highlight();
    };
    /** View. **/
    /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.getOptionStyle = /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (option.highlighted) {
            /** @type {?} */
            var style = {};
            if (typeof this.highlightColor !== 'undefined') {
                style['background-color'] = this.highlightColor;
            }
            if (typeof this.highlightTextColor !== 'undefined') {
                style['color'] = this.highlightTextColor;
            }
            return style;
        }
        else {
            return {};
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.moveHighlightedIntoView = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var list = this.optionsList.nativeElement;
        /** @type {?} */
        var listHeight = list.offsetHeight;
        /** @type {?} */
        var itemIndex = this.optionList.getHighlightedIndex();
        if (itemIndex > -1) {
            /** @type {?} */
            var item = list.children[0].children[itemIndex];
            /** @type {?} */
            var itemHeight = item.offsetHeight;
            /** @type {?} */
            var itemTop = itemIndex * itemHeight;
            /** @type {?} */
            var itemBottom = itemTop + itemHeight;
            /** @type {?} */
            var viewTop = list.scrollTop;
            /** @type {?} */
            var viewBottom = viewTop + listHeight;
            if (itemBottom > viewBottom) {
                list.scrollTop = itemBottom - listHeight;
            }
            else if (itemTop < viewTop) {
                list.scrollTop = itemTop;
            }
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    SelectDropdownComponent.prototype.handleOptionsWheel = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var div = this.optionsList.nativeElement;
        /** @type {?} */
        var atTop = div.scrollTop === 0;
        /** @type {?} */
        var atBottom = div.offsetHeight + div.scrollTop === div.scrollHeight;
        if (atTop && e.deltaY < 0) {
            e.preventDefault();
        }
        else if (atBottom && e.deltaY > 0) {
            e.preventDefault();
        }
    };
    SelectDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'select-dropdown',
                    template: "<div\n    [ngClass]=\"{'below': isBelow, 'above': !isBelow}\"\n    [ngStyle]=\"{'top.px': top, 'left.px': left, 'width.px': width}\">\n\n    <div class=\"filter\"\n        *ngIf=\"!multiple && filterEnabled\">\n        <input\n            #filterInput\n            autocomplete=\"off\"\n            [placeholder]=\"placeholder\"\n            (click)=\"onSingleFilterClick()\"\n            (input)=\"onSingleFilterInput($event)\"\n            (keydown)=\"onSingleFilterKeydown($event)\"\n            (focus)=\"onSingleFilterFocus()\">\n    </div>\n\n    <div class=\"options\"\n        (click)=\"onOptionsListClick()\"\n        #optionsList>\n        <ul\n            (wheel)=\"onOptionsWheel($event)\">\n            <li *ngFor=\"let option of optionList.filtered\"\n                [ngClass]=\"{'highlighted': option.highlighted, 'selected': option.selected, 'disabled': option.disabled}\"\n                [ngStyle]=\"getOptionStyle(option)\"\n                (click)=\"onOptionClick(option)\"\n                (mouseover)=\"onOptionMouseover(option)\">\n                <ng-container *ngTemplateOutlet=\"optionTemplate; context:{option: option.wrappedOption}\"></ng-container>\n                <span *ngIf=\"!optionTemplate\">{{option.label}}</span>\n            </li>\n            <li\n                *ngIf=\"!optionList.hasShown\"\n                class=\"message\">\n                {{notFoundMsg}}\n            </li>\n        </ul>\n    </div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["select-dropdown,select-dropdown *{box-sizing:border-box}select-dropdown>div{background-color:#fff;border:1px solid #ccc;box-sizing:border-box;position:absolute;z-index:1}select-dropdown>div.above{border-bottom:none}select-dropdown>div.below{border-top:none}select-dropdown>div .filter{padding:3px;width:100%}select-dropdown>div .filter input{border:1px solid #eee;box-sizing:border-box;padding:4px;width:100%}select-dropdown>div .options{max-height:200px;overflow-y:auto}select-dropdown>div .options ul{list-style:none;margin:0;padding:0}select-dropdown>div .options ul li{padding:4px 8px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}select-dropdown .selected{background-color:#e0e0e0}select-dropdown .highlighted,select-dropdown .selected.highlighted{background-color:#2196f3;color:#fff}select-dropdown .disabled{background-color:#fff;color:#9e9e9e;cursor:default;pointer-events:none}"]
                }] }
    ];
    /** @nocollapse */
    SelectDropdownComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SelectDropdownComponent.propDecorators = {
        filterEnabled: [{ type: Input }],
        highlightColor: [{ type: Input }],
        highlightTextColor: [{ type: Input }],
        left: [{ type: Input }],
        multiple: [{ type: Input }],
        notFoundMsg: [{ type: Input }],
        optionList: [{ type: Input }],
        isBelow: [{ type: Input }],
        top: [{ type: Input }],
        width: [{ type: Input }],
        placeholder: [{ type: Input }],
        optionTemplate: [{ type: Input }],
        optionClicked: [{ type: Output }],
        optionsListClick: [{ type: Output }],
        singleFilterClick: [{ type: Output }],
        singleFilterFocus: [{ type: Output }],
        singleFilterInput: [{ type: Output }],
        singleFilterKeydown: [{ type: Output }],
        filterInput: [{ type: ViewChild, args: ['filterInput', { static: false },] }],
        optionsList: [{ type: ViewChild, args: ['optionsList', { static: true },] }]
    };
    return SelectDropdownComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return SelectComponent; })),
    multi: true
};
var SelectComponent = /** @class */ (function () {
    function SelectComponent(hostElement) {
        this.hostElement = hostElement;
        // Data input.
        this.options = [];
        // Functionality settings.
        this.allowClear = false;
        this.disabled = false;
        this.multiple = false;
        this.noFilter = 0;
        // Text settings.
        this.notFoundMsg = 'No results found';
        this.placeholder = '';
        this.filterPlaceholder = '';
        this.label = '';
        // Output events.
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
        this.selected = new EventEmitter();
        this.deselected = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.noOptionsFound = new EventEmitter();
        this.filterInputChanged = new EventEmitter();
        this._value = [];
        this.optionList = new OptionList([]);
        // View state variables.
        this.hasFocus = false;
        this.isOpen = false;
        this.isBelow = true;
        this.filterEnabled = true;
        this.filterInputWidth = 1;
        this.isDisabled = false;
        this.placeholderView = '';
        this.clearClicked = false;
        this.selectContainerClicked = false;
        this.optionListClicked = false;
        this.optionClicked = false;
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
        /**
         * Keys. *
         */
        this.KEYS = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            UP: 38,
            DOWN: 40
        };
    }
    /** Event handlers. **/
    /**
     * Event handlers. *
     * @return {?}
     */
    SelectComponent.prototype.ngOnInit = /**
     * Event handlers. *
     * @return {?}
     */
    function () {
        this.placeholderView = this.placeholder;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SelectComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.handleInputChanges(changes);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateState();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onWindowBlur = /**
     * @return {?}
     */
    function () {
        this._blur();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onWindowClick = /**
     * @return {?}
     */
    function () {
        if (!this.selectContainerClicked &&
            (!this.optionListClicked || (this.optionListClicked && this.optionClicked))) {
            this.closeDropdown(this.optionClicked);
            if (!this.optionClicked) {
                this._blur();
            }
        }
        this.clearClicked = false;
        this.selectContainerClicked = false;
        this.optionListClicked = false;
        this.optionClicked = false;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onWindowResize = /**
     * @return {?}
     */
    function () {
        this.updateWidth();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectContainerClicked = true;
        if (!this.clearClicked) {
            this.toggleDropdown();
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerFocus = /**
     * @return {?}
     */
    function () {
        this._focus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleSelectContainerKeydown(event);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onOptionsListClick = /**
     * @return {?}
     */
    function () {
        this.optionListClicked = true;
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.onDropdownOptionClicked = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.optionClicked = true;
        this.multiple ? this.toggleSelectOption(option) : this.selectOption(option);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterClick = /**
     * @return {?}
     */
    function () {
        this.selectContainerClicked = true;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterFocus = /**
     * @return {?}
     */
    function () {
        this._focus();
    };
    /**
     * @param {?} term
     * @return {?}
     */
    SelectComponent.prototype.onFilterInput = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        this.filterInputChanged.emit(term);
        this.filter(term);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleSingleFilterKeydown(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onMultipleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleMultipleFilterKeydown(event);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onMultipleFilterFocus = /**
     * @return {?}
     */
    function () {
        this._focus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onClearSelectionClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.clearClicked = true;
        this.clearSelection();
        this.closeDropdown(true);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.onDeselectOptionClick = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.clearClicked = true;
        this.deselectOption(option);
    };
    /** API. **/
    // TODO fix issues with global click/key handler that closes the dropdown.
    /**
     * API. *
     * @return {?}
     */
    // TODO fix issues with global click/key handler that closes the dropdown.
    SelectComponent.prototype.open = /**
     * API. *
     * @return {?}
     */
    // TODO fix issues with global click/key handler that closes the dropdown.
    function () {
        this.openDropdown();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.closeDropdown(false);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.clearSelection();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.select = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.writeValue(value);
    };
    /** ControlValueAccessor interface methods. **/
    /**
     * ControlValueAccessor interface methods. *
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.writeValue = /**
     * ControlValueAccessor interface methods. *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /** Input change handling. **/
    /**
     * Input change handling. *
     * @private
     * @param {?} changes
     * @return {?}
     */
    SelectComponent.prototype.handleInputChanges = /**
     * Input change handling. *
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var optionsChanged = changes.hasOwnProperty('options');
        /** @type {?} */
        var noFilterChanged = changes.hasOwnProperty('noFilter');
        /** @type {?} */
        var placeholderChanged = changes.hasOwnProperty('placeholder');
        if (optionsChanged) {
            this.updateOptionList(changes.options.currentValue);
            this.updateState();
        }
        if (optionsChanged || noFilterChanged) {
            this.updateFilterEnabled();
        }
        if (placeholderChanged) {
            this.updateState();
        }
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    SelectComponent.prototype.updateOptionList = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.optionList = new OptionList(options);
        this.optionList.value = this._value;
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.updateFilterEnabled = /**
     * @private
     * @return {?}
     */
    function () {
        this.filterEnabled = this.optionList.options.length >= this.noFilter;
    };
    Object.defineProperty(SelectComponent.prototype, "value", {
        /** Value. **/
        get: /**
         * Value. *
         * @return {?}
         */
        function () {
            return this.multiple ? this._value : this._value[0];
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (typeof v === 'undefined' || v === null || v === '') {
                v = [];
            }
            else if (typeof v === 'string') {
                v = [v];
            }
            else if (!Array.isArray(v)) {
                throw new TypeError('Value must be a string or an array.');
            }
            this.optionList.value = v;
            this._value = v;
            this.updateState();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.valueChanged = /**
     * @private
     * @return {?}
     */
    function () {
        this._value = this.optionList.value;
        this.updateState();
        this.onChange(this.value);
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.updateState = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.placeholderView = this.optionList.hasSelected ? '' : this.placeholder;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.updateFilterWidth();
        }));
    };
    /** Select. **/
    /**
     * Select. *
     * @private
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.selectOption = /**
     * Select. *
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (!option.selected && !option.disabled) {
            this.optionList.select(option, this.multiple);
            this.valueChanged();
            this.selected.emit(option.wrappedOption);
        }
    };
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.deselectOption = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        if (option.selected) {
            this.optionList.deselect(option);
            this.valueChanged();
            this.deselected.emit(option.wrappedOption);
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this.multiple) {
                    _this.updatePosition();
                    _this.optionList.highlight();
                    if (_this.isOpen) {
                        _this.dropdown.moveHighlightedIntoView();
                    }
                }
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.clearSelection = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selection = this.optionList.selection;
        if (selection.length > 0) {
            this.optionList.clearSelection();
            this.valueChanged();
            if (selection.length === 1) {
                this.deselected.emit(selection[0].wrappedOption);
            }
            else {
                this.deselected.emit(selection.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) { return option.wrappedOption; })));
            }
        }
    };
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.toggleSelectOption = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        option.selected ? this.deselectOption(option) : this.selectOption(option);
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.selectHighlightedOption = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var option = this.optionList.highlightedOption;
        if (option !== null) {
            this.selectOption(option);
            this.closeDropdown(true);
        }
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.deselectLast = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sel = this.optionList.selection;
        if (sel.length > 0) {
            /** @type {?} */
            var option = sel[sel.length - 1];
            this.deselectOption(option);
            this.setMultipleFilterInput(option.label + ' ');
        }
    };
    /** Dropdown. **/
    /**
     * Dropdown. *
     * @private
     * @return {?}
     */
    SelectComponent.prototype.toggleDropdown = /**
     * Dropdown. *
     * @private
     * @return {?}
     */
    function () {
        if (!this.isDisabled) {
            this.isOpen ? this.closeDropdown(true) : this.openDropdown();
        }
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.openDropdown = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isOpen) {
            this.isOpen = true;
            this.updateWidth();
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.updatePosition();
                if (_this.multiple && _this.filterEnabled) {
                    _this.filterInput.nativeElement.focus();
                }
                _this.opened.emit(null);
            }));
        }
    };
    /**
     * @private
     * @param {?} focus
     * @return {?}
     */
    SelectComponent.prototype.closeDropdown = /**
     * @private
     * @param {?} focus
     * @return {?}
     */
    function (focus) {
        if (this.isOpen) {
            this.clearFilterInput();
            this.updateFilterWidth();
            this.isOpen = false;
            if (focus) {
                this._focusSelectContainer();
            }
            this.closed.emit(null);
        }
    };
    /** Filter. **/
    /**
     * Filter. *
     * @private
     * @param {?} term
     * @return {?}
     */
    SelectComponent.prototype.filter = /**
     * Filter. *
     * @private
     * @param {?} term
     * @return {?}
     */
    function (term) {
        var _this = this;
        if (this.multiple) {
            if (!this.isOpen) {
                this.openDropdown();
            }
            this.updateFilterWidth();
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var hasShown = _this.optionList.filter(term);
            if (!hasShown) {
                _this.noOptionsFound.emit(term);
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.clearFilterInput = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.setMultipleFilterInput = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = value;
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleSelectContainerKeydown = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var key = event.which;
        if (this.isOpen) {
            if (key === this.KEYS.ESC || (key === this.KEYS.UP && event.altKey)) {
                this.closeDropdown(true);
            }
            else if (key === this.KEYS.TAB) {
                this.closeDropdown(event.shiftKey);
                this._blur();
            }
            else if (key === this.KEYS.ENTER) {
                this.selectHighlightedOption();
            }
            else if (key === this.KEYS.UP) {
                this.optionList.highlightPreviousOption();
                this.dropdown.moveHighlightedIntoView();
                if (!this.filterEnabled) {
                    event.preventDefault();
                }
            }
            else if (key === this.KEYS.DOWN) {
                this.optionList.highlightNextOption();
                this.dropdown.moveHighlightedIntoView();
                if (!this.filterEnabled) {
                    event.preventDefault();
                }
            }
        }
        else {
            // DEPRICATED --> SPACE
            if (key === this.KEYS.ENTER || key === this.KEYS.SPACE ||
                (key === this.KEYS.DOWN && event.altKey)) {
                /* FIREFOX HACK:
                 *
                 * The setTimeout is added to prevent the enter keydown event
                 * to be triggered for the filter input field, which causes
                 * the dropdown to be closed again.
                 */
                setTimeout((/**
                 * @return {?}
                 */
                function () { _this.openDropdown(); }));
            }
            else if (key === this.KEYS.TAB) {
                this._blur();
            }
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleMultipleFilterKeydown = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var key = event.which;
        if (key === this.KEYS.BACKSPACE) {
            if (this.optionList.hasSelected && this.filterEnabled &&
                this.filterInput.nativeElement.value === '') {
                this.deselectLast();
            }
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleSingleFilterKeydown = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var key = event.which;
        if (key === this.KEYS.ESC || key === this.KEYS.TAB
            || key === this.KEYS.UP || key === this.KEYS.DOWN
            || key === this.KEYS.ENTER) {
            this.handleSelectContainerKeydown(event);
        }
    };
    /** View. **/
    /**
     * View. *
     * @return {?}
     */
    SelectComponent.prototype._blur = /**
     * View. *
     * @return {?}
     */
    function () {
        if (this.hasFocus) {
            this.hasFocus = false;
            this.onTouched();
            this.blur.emit(null);
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype._focus = /**
     * @return {?}
     */
    function () {
        if (!this.hasFocus) {
            this.hasFocus = true;
            this.focus.emit(null);
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype._focusSelectContainer = /**
     * @return {?}
     */
    function () {
        this.selectionSpan.nativeElement.focus();
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.updateWidth = /**
     * @private
     * @return {?}
     */
    function () {
        this.width = this.selectionSpan.nativeElement.getBoundingClientRect().width;
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.updatePosition = /**
     * @private
     * @return {?}
     */
    function () {
        if (typeof this.dropdown !== 'undefined') {
            /** @type {?} */
            var hostRect = this.hostElement.nativeElement.getBoundingClientRect();
            /** @type {?} */
            var spanRect = this.selectionSpan.nativeElement.getBoundingClientRect();
            /** @type {?} */
            var dropRect = this.dropdown.hostElement.nativeElement.firstElementChild.getBoundingClientRect();
            /** @type {?} */
            var windowHeight = window.innerHeight;
            /** @type {?} */
            var top_1 = spanRect.top - hostRect.top;
            /** @type {?} */
            var bottom = hostRect.bottom + dropRect.height;
            this.isBelow = bottom < windowHeight;
            this.left = spanRect.left - hostRect.left;
            this.top = this.isBelow ? top_1 + spanRect.height : top_1 - dropRect.height;
        }
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype.updateFilterWidth = /**
     * @private
     * @return {?}
     */
    function () {
        if (typeof this.filterInput !== 'undefined') {
            /** @type {?} */
            var value = this.filterInput.nativeElement.value;
            this.filterInputWidth = value.length === 0 ?
                1 + this.placeholderView.length * 10 : 1 + value.length * 10;
        }
    };
    SelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-select',
                    template: "<label\n    *ngIf=\"label !== ''\">\n    {{label}}\n</label>\n<div\n    #selection\n    [attr.tabindex]=\"disabled ? null : 0\"\n    [ngClass]=\"{'open': isOpen, 'focus': hasFocus, 'below': isBelow, 'above': !isBelow, 'disabled': disabled}\"\n    (click)=\"onSelectContainerClick($event)\"\n    (focus)=\"onSelectContainerFocus()\"\n    (keydown)=\"onSelectContainerKeydown($event)\">\n\n    <div class=\"single\"\n        *ngIf=\"!multiple\">\n        <div class=\"value\"\n            *ngIf=\"optionList.hasSelected\">\n            <ng-container *ngTemplateOutlet=\"optionTemplate; context:{option: optionList.selection[0].wrappedOption, onDeselectOptionClick: onDeselectOptionClick}\"></ng-container>\n            <span *ngIf=\"!optionTemplate\">{{optionList.selection[0].label}}</span>\n        </div>\n        <div class=\"placeholder\"\n            *ngIf=\"!optionList.hasSelected\">\n            {{placeholderView}}\n        </div>\n        <div class=\"clear\"\n            *ngIf=\"allowClear && optionList.hasSelected\"\n            (click)=\"onClearSelectionClick($event)\">\n            &#x2715;\n        </div>\n        <div class=\"toggle\"\n            *ngIf=\"isOpen\">\n            &#x25B2;\n        </div>\n        <div class=\"toggle\"\n            *ngIf=\"!isOpen\">\n            &#x25BC;\n        </div>\n    </div>\n\n    <div class=\"multiple\"\n        *ngIf=\"multiple\">\n        <div class=\"option\"\n            *ngFor=\"let option of optionList.selection\">\n            <span class=\"deselect-option\"\n                (click)=onDeselectOptionClick(option)>\n                &#x2715;\n            </span>\n            {{option.label}}\n        </div>\n        <div class=\"placeholder\"\n            *ngIf=\"!filterEnabled && !optionList.hasSelected\">\n            {{placeholderView}}\n        </div>\n        <input\n            *ngIf=\"filterEnabled\"\n            #filterInput\n            autocomplete=\"off\"\n            tabindex=\"-1\"\n            [placeholder]=\"placeholderView\"\n            [ngStyle]=\"{'width.px': filterInputWidth}\"\n            (input)=\"onFilterInput($event.target.value)\"\n            (keydown)=\"onMultipleFilterKeydown($event)\"\n            (focus)=\"onMultipleFilterFocus()\"/>\n    </div>\n\n</div>\n<select-dropdown\n    *ngIf=\"isOpen\"\n    #dropdown\n    [multiple]=\"multiple\"\n    [optionList]=\"optionList\"\n    [notFoundMsg]=\"notFoundMsg\"\n    [highlightColor]=\"highlightColor\"\n    [highlightTextColor]=\"highlightTextColor\"\n    [filterEnabled]=\"filterEnabled\"\n    [placeholder]=\"filterPlaceholder\"\n    [isBelow]=\"isBelow\"\n    [width]=\"width\"\n    [top]=\"top\"\n    [left]=\"left\"\n    [optionTemplate]=\"optionTemplate\"\n    (optionClicked)=\"onDropdownOptionClicked($event)\"\n    (optionsListClick)=\"onOptionsListClick()\"\n    (singleFilterClick)=\"onSingleFilterClick()\"\n    (singleFilterFocus)=\"onSingleFilterFocus()\"\n    (singleFilterInput)=\"onFilterInput($event)\"\n    (singleFilterKeydown)=\"onSingleFilterKeydown($event)\">\n</select-dropdown>\n",
                    providers: [SELECT_VALUE_ACCESSOR],
                    encapsulation: ViewEncapsulation.None,
                    styles: ["ng-select{display:inline-block;margin:0;position:relative;vertical-align:middle;width:100%}ng-select *{box-sizing:border-box}ng-select>div{border:1px solid #ddd;box-sizing:border-box;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}ng-select>div.disabled{background-color:#eee;color:#aaa;cursor:default;pointer-events:none}ng-select>div>div.single{display:flex;height:30px;width:100%}ng-select>div>div.single>div.placeholder,ng-select>div>div.single>div.value{flex:1;line-height:30px;overflow:hidden;padding:0 10px;white-space:nowrap}ng-select>div>div.single>div.placeholder{color:#757575}ng-select>div>div.single>div.clear,ng-select>div>div.single>div.toggle{color:#aaa;line-height:30px;text-align:center;width:30px}ng-select>div>div.single>div.clear:hover,ng-select>div>div.single>div.toggle:hover{background-color:#ececec}ng-select>div>div.single>div.clear{font-size:18px}ng-select>div>div.single>div.toggle{font-size:14px}ng-select>div>div.multiple{display:flex;flex-flow:row wrap;height:100%;min-height:30px;padding:0 10px;width:100%}ng-select>div>div.multiple>div.option{background-color:#eee;border:1px solid #aaa;border-radius:4px;color:#333;cursor:default;display:inline-block;flex-shrink:0;font-size:14px;line-height:22px;margin:3px 5px 3px 0;padding:0 4px}ng-select>div>div.multiple>div.option span.deselect-option{color:#aaa;cursor:pointer;font-size:14px;height:20px;line-height:20px}ng-select>div>div.multiple>div.option span.deselect-option:hover{color:#555}ng-select>div>div.multiple input{background-color:transparent;border:none;cursor:pointer;height:30px;line-height:30px;padding:0}ng-select>div>div.multiple input:focus{outline:0}ng-select label{color:rgba(0,0,0,.38);display:block;font-size:13px;padding:4px 0}"]
                }] }
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SelectComponent.propDecorators = {
        options: [{ type: Input }],
        allowClear: [{ type: Input }],
        disabled: [{ type: Input }],
        multiple: [{ type: Input }],
        noFilter: [{ type: Input }],
        highlightColor: [{ type: Input }],
        highlightTextColor: [{ type: Input }],
        notFoundMsg: [{ type: Input }],
        placeholder: [{ type: Input }],
        filterPlaceholder: [{ type: Input }],
        label: [{ type: Input }],
        opened: [{ type: Output }],
        closed: [{ type: Output }],
        selected: [{ type: Output }],
        deselected: [{ type: Output }],
        focus: [{ type: Output }],
        blur: [{ type: Output }],
        noOptionsFound: [{ type: Output }],
        filterInputChanged: [{ type: Output }],
        selectionSpan: [{ type: ViewChild, args: ['selection', { static: true },] }],
        dropdown: [{ type: ViewChild, args: ['dropdown', { static: false },] }],
        filterInput: [{ type: ViewChild, args: ['filterInput', { static: false },] }],
        optionTemplate: [{ type: ContentChild, args: ['optionTemplate', { static: false },] }],
        onWindowBlur: [{ type: HostListener, args: ['window:blur',] }],
        onWindowClick: [{ type: HostListener, args: ['window:click',] }],
        onWindowResize: [{ type: HostListener, args: ['window:resize',] }]
    };
    return SelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectModule = /** @class */ (function () {
    function SelectModule() {
    }
    SelectModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        SelectComponent,
                        SelectDropdownComponent
                    ],
                    exports: [
                        SelectComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule
                    ]
                },] }
    ];
    return SelectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SELECT_VALUE_ACCESSOR, SelectComponent, SelectModule, SelectDropdownComponent as ɵa };
//# sourceMappingURL=ng-select.js.map
