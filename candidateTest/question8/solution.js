function howManyDaysBetweenTwoDates(date1, date2) {
	var diff = new Date(+date2).setHours(12) - new Date(+date1).setHours(12);
     return Math.round(diff/8.64e7);
}

module.exports = howManyDaysBetweenTwoDates;