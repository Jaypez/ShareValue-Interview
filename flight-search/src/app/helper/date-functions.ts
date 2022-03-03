import { Time } from "@angular/common";

export class DateFunctions {
  public static addTime(date: Date, timeToAdd: Time) {
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    minutes += timeToAdd.minutes;
    if (minutes > 59) {
      minutes -= 59;
      hours += 1;
    }

    hours += timeToAdd.hours;
    if (hours > 23) {
      hours -= 23;
      day += 1;
    }

    if (month == 1) {
      if (year % 4 == 0 && day > 29) {
        day -= 29;
        month += 1;
      } else if (year % 4 != 0 && day > 28) {
        day -= 28;
        month += 1;
      }
    }

    if (month > 11) {
      month -= 11;
      year += 1;
    }

    return new Date(year, month, day, hours, minutes);
  }
}
