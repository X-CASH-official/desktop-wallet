import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-adv-datepicker',
  templateUrl: './adv-datepicker.component.html',
  styleUrls: [
    './adv-datepicker.component.scss',
    '../../../../../../node_modules/ic-datepicker/themes/theme-default.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AdvDatepickerComponent implements OnInit {
  displayDate: any;
  exampleDatepickerForm: FormGroup;
  exampleDatepickerConfig: any;
  iconSets = {
    svg: {
      nextMonth: { classes: ['chevron', 'chevron-right'] },
      nextYears: { classes: ['chevron', 'chevron-down'] },
      previousMonth: { classes: ['chevron', 'chevron-left'] },
      previousYears: { classes: ['chevron', 'chevron-up'] }
    },
    fontAwesome: {
      nextMonth: { classes: ['fa', 'fa-chevron-right'] },
      nextYears: { classes: ['fa', 'fa-chevron-down'] },
      previousMonth: { classes: ['fa', 'fa-chevron-left'] },
      previousYears: { classes: ['fa', 'fa-chevron-up'] }
    },
    material: {
      nextMonth: {
        classes: ['material-icons'],
        content: 'chevron_right'
      },
      nextYears: {
        classes: ['material-icons'],
        content: 'keyboard_arrow_down'
      },
      previousMonth: {
        classes: ['material-icons'],
        content: 'chevron_left'
      },
      previousYears: {
        classes: ['material-icons'],
        content: 'keyboard_arrow_up'
      }
    }
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.exampleDatepickerConfig = {
      attrs: {
        id: 'example-datepicker'
      },
      clearInvalidDates: true,
      closeOnSelect: true,
      customDayClasses: [],
      disableWeekends: false,
      displayFormat: 'L',
      iconSet: 'svg',
      inputClasses: [],
      inputTemplate: 'bootstrap',
      maxDate: moment().add(6, 'month'),
      minDate: moment().subtract(6, 'month'),
      modelType: 'string',
      position: 'bottom',
      showDayQuickOptions: true,
      showEmptyRow: true,
      stringModelFormat: 'YYYY-MM-DD'
    };

    this.exampleDatepickerForm = this.formBuilder.group({
      datepicker: new FormControl({
        value: moment().add(3, 'months').format('YYYY-MM-DD'),
        disabled: false
      })
    });

    const dateChange$ = this.exampleDatepickerForm.get('datepicker').valueChanges;

    dateChange$.subscribe((date) => {
      this.displayDate = date;
    });
  }

  onConfigChanged($event) {
    setTimeout(() => {
      const datepicker = this.exampleDatepickerForm.get('datepicker');
      const config = this.buildEventConfig($event.config);

      if (config.disableDatepicker) {
        datepicker.disable();
      } else {
        datepicker.enable();
      }

      if (config.highlightEvenDays) {
        config.customDayClasses = [{
          classes: ['even'],
          callback: (momentInstance) => {
            return (parseInt(momentInstance.format('DD'), 10) % 2) === 0;
          }
        }];
      }

      this.exampleDatepickerConfig = config;
    });
  }

  buildEventConfig(config) {
    let icons = this.iconSets.svg;

    if (this.iconSets[config.iconSet]) {
      icons = this.iconSets[config.iconSet];
    }

    config.icons = icons;

    return config;
  }

  onSubmit(form) {
  }

  clearDatepicker() {
    this.exampleDatepickerForm.patchValue({
      datepicker: null
    });
  }

}
