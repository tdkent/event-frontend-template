export default function generateShowDates() {
	const showStartDate = new Date('2024-09-15');
	const showEndDate = new Date('2024-09-16');

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

	const headerOptions: Intl.DateTimeFormatOptions = {
		weekday: 'short',
		month: 'numeric',
		day: 'numeric',
	};

	// Format start date
	const showStartDateString = showStartDate.toLocaleDateString(
		undefined,
		options
	);
	const showStartDateStringHeader = showStartDate.toLocaleDateString(
		undefined,
		headerOptions
	);
	const showStartDayOfWeek = weekday[showStartDate.getDay()];

	// Format end date
	const showEndDateString = showEndDate.toLocaleDateString(undefined, options);
	const showEndDateStringHeader = showEndDate.toLocaleDateString(
		undefined,
		headerOptions
	);
	const showEndDayOfWeek = weekday[showEndDate.getDay()];

	return {
		showStartDateString,
		showStartDateStringHeader,
		showStartDayOfWeek,
		showEndDateString,
		showEndDateStringHeader,
		showEndDayOfWeek,
	};
}
