import { ITime } from './definitions';
export declare class AtpCoreService {
    constructor();
    allowedTimes(min: any, max: any): any[];
    ClockMaker(type: 'minute' | 'hour'): Array<any>;
    TimeToString(time: ITime): string;
    /**
     * Converts 00:00 format to ITime object
     */
    StringToTime(time: string): ITime;
    /**
     * @experimental
     */
    CalcDegrees(ele: any, parrentPos: any, step: number): number;
}
