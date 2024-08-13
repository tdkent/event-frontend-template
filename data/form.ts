import { MembershipEnum, TableEnum } from '~/models';
export const membershipTypeOptions = [
	{
		value: MembershipEnum.enum.both,
		label: 'Both Days',
	},
	{
		value: MembershipEnum.enum.sat,
		label: 'Saturday Only',
	},
	{
		value: MembershipEnum.enum.sun,
		label: 'Sunday Only',
	},
];

export const tableOptions = [
	{
		value: TableEnum.enum.n,
		label: 'No',
	},
	{
		value: TableEnum.enum['y-sat'],
		label: 'Yes: Saturday Only',
	},
	{
		value: TableEnum.enum['y-sun'],
		label: 'Yes: Sunday Only',
	},
	{
		value: TableEnum.enum['y-both'],
		label: 'Yes: Both Days',
	},
];
