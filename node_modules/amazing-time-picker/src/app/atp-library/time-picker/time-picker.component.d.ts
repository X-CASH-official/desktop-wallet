import { OnInit } from '@angular/core';
import { IClockNumber, IDisplayPreference, TimePickerConfig } from '../definitions';
import { AtpCoreService } from '../atp-core.service';
import { ITime } from '../definitions';
export declare class TimePickerComponent implements OnInit {
    private core;
    _ref: any;
    subject: any;
    activeModal: boolean;
    timerElement: any;
    clockObject: Array<any>;
    isClicked: boolean;
    clockType: 'minute' | 'hour';
    time: ITime;
    nowTime: any;
    degree: any;
    config: TimePickerConfig;
    appRef: any;
    isPopup: boolean;
    allowed: any;
    preference: IDisplayPreference;
    changeToMin: boolean;
    private animationTime;
    constructor(core: AtpCoreService);
    ParseStringToTime(time: string): void;
    GetTime(): void;
    clockMaker: () => void;
    setActiveTime: () => void;
    setArrow: (obj: any) => void;
    rotationClass: (degrees: any) => void;
    setTime(): void;
    getDegree: (ele: any) => void;
    private GetNowTime(hour, ampm, minute);
    checkBet(): void;
    modalAnimation(): void;
    ngOnInit(): void;
    MinuteClick(): boolean;
    HourClick(): boolean;
    ChangeAnimational(type: 'minute' | 'hour'): void;
    SetAM(): boolean;
    SetPM(): boolean;
    Close(e: any): void;
    getClockArrowStyle(): {};
    getAnimationTime(): string;
    /**
     * Event on clock mouse click down
     * @param event - captured event
     */
    updateClockDown(event: any): void;
    setNewRotation(): void;
    GetSeparator(): string;
    GetPeriod(period: 'AM' | 'PM'): any;
    GetMinute(): any;
    GetHour(): any;
    GetClockTime(clock: IClockNumber): any;
    GetLabel(key: string): any;
}
