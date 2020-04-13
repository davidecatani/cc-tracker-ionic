import { weekdays } from '../models/weekdays';

export function getToday(date: Date): string {
    return weekdays[date.getDay()];
}

export function getNextDay(day: string) {
    const currentIndex = weekdays.indexOf(day);
    const nextIndex = (currentIndex + 1) % weekdays.length;
    return weekdays[nextIndex];
}
export function getPreviousDay(day: string) {
    const currentIndex = weekdays.indexOf(day);
    const previousIndex = (currentIndex - 1) % weekdays.length;
    if (Math.sign(previousIndex) === -1) {
        return weekdays[weekdays.length - 1];
    }
    return weekdays[previousIndex];
}