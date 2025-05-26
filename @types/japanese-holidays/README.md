# Installation
> `npm install --save @types/japanese-holidays`

# Summary
This package contains type definitions for japanese-holidays (https://github.com/osamutake/japanese-holidays-js).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/japanese-holidays.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/japanese-holidays/index.d.ts)
````ts
export as namespace JapaneseHolidays;

export function isHoliday(date: Date, furikae?: boolean): string | undefined;
export function isHolidayAt(date: Date, furikae?: boolean): string | undefined;
export function getHolidaysOf(year: number, furikae?: boolean): Holiday[];

export function getJDate(date: Date): number;
export function getJDay(date: Date): number;
export function getJFullYear(date: Date): number;
export function getJHours(date: Date): number;
export function getJMinutes(date: Date): number;
export function getJMonth(date: Date): number;
export function j2u(date: Date): Date;
export function jDate(year: number, month: number, day: number): Date;
export function shiftDate(
    date: Date,
    year: number,
    mon: number,
    day: number,
    hour: number,
    min: number,
    sec: number,
    msec: number,
): Date;
export function u2j(date: Date): Date;
export function uDate(year: number, month: number, day: number): Date;

export interface Holiday {
    month: number;
    date: number;
    name: string;
}

````

### Additional Details
 * Last updated: Tue, 07 Nov 2023 03:09:37 GMT
 * Dependencies: none

# Credits
These definitions were written by [syamatoo](https://github.com/syamatoo), and [Piotr Błażejewicz](https://github.com/peterblazejewicz).
