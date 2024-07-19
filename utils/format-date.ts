export default function formatDate() {
	const dummyStartDate = new Date('2024-09-15');
	const dummyEndDate = new Date('2024-09-16');

	const weekday = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	const eventStart = dummyStartDate.toLocaleDateString(undefined, options);
	const eventEnd = dummyEndDate.toLocaleDateString(undefined, options);
	const startDay = weekday[dummyStartDate.getDay()];
	const endDay = weekday[dummyEndDate.getDay()];

	return { eventStart, eventEnd, startDay, endDay };
}
