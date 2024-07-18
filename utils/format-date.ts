export default function formatDate() {
	const dummyStartDate = new Date('2024-09-16');
	const dummyEndDate = new Date('2024-09-17');

	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	const eventStart = dummyStartDate.toLocaleDateString(undefined, options);
	const eventEnd = dummyEndDate.toLocaleDateString(undefined, options);

	return { eventStart, eventEnd };
}
