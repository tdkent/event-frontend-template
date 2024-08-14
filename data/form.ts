import { MembershipEnum, TableEnum } from '~/models';
export const membershipTypeOptions = [
	{
		value: MembershipEnum.enum.both,
		label: 'Both Days',
	},
	{
		value: MembershipEnum.enum.day1,
		label: dayOneDayOfWeek + ' Only',
	},
	{
		value: MembershipEnum.enum.day2,
		label: dayTwoDayOfWeek + ' Only',
	},
];

export const tableOptions = [
	{
		value: TableEnum.enum.n,
		label: 'No',
	},
	{
		value: TableEnum.enum['y-day1'],
		label: 'Yes: ' + dayOneDayOfWeek + ' Only',
	},
	{
		value: TableEnum.enum['y-day2'],
		label: 'Yes: ' + dayTwoDayOfWeek + ' Only',
	},
	{
		value: TableEnum.enum['y-both'],
		label: 'Yes: Both Days',
	},
];
