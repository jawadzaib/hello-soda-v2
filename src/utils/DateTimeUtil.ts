
class DateTimeUtil {
    static getMonthStartDate(date: Date = new Date()) {
        return new Date(date.getFullYear(), date.getMonth(), 1);
    }
    static getMonthLastDate(date: Date = new Date()) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }
    static addDays(date: Date = new Date(), days: number = 0) {
        let newDate = new Date(date.valueOf());
        newDate.setDate(newDate.getDate() + days);
        return newDate;
    }
}

export default DateTimeUtil;