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

	const mainOptions: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	const headerOptions: Intl.DateTimeFormatOptions = {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	};

	// Format start date
	const mainStartDateString = showStartDate.toLocaleDateString(
		undefined,
		mainOptions
	);
	const headerStartDateString = showStartDate.toLocaleDateString(
		undefined,
		headerOptions
	);
	const startDay = weekday[showStartDate.getDay()];

	// Format end date
	const mainEndDateString = showEndDate.toLocaleDateString(
		undefined,
		mainOptions
	);
	const headerEndDateString = showEndDate.toLocaleDateString(
		undefined,
		headerOptions
	);
	const endDay = weekday[showEndDate.getDay()];

	return {
		mainStartDateString,
		headerStartDateString,
		startDay,
		mainEndDateString,
		headerEndDateString,
		endDay,
	};
}
