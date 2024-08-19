import {
	MembershipEnum,
	TableEnum,
	zMembershipEnum,
	zTableEnum,
} from '~/models';

// Form radio group options
export const membershipTypeOptions = [
	{
		value: zMembershipEnum.enum.both,
		label: MembershipEnum.both,
	},
	{
		value: zMembershipEnum.enum.day1,
		label: MembershipEnum.day1,
	},
	{
		value: zMembershipEnum.enum.day2,
		label: MembershipEnum.day2,
	},
];
export const tableOptions = [
	{
		value: zTableEnum.enum.no,
		label: TableEnum.no,
	},
	{
		value: zTableEnum.enum['yday1'],
		label: TableEnum.yday1,
	},
	{
		value: zTableEnum.enum['yday2'],
		label: TableEnum.yday2,
	},
	{
		value: zTableEnum.enum['yboth'],
		label: TableEnum.yboth,
	},
];
