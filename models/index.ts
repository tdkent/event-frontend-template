// Imports
import { z } from 'zod';
// Division list
export type Division = {
	name: string;
	judge: string;
};

// Restaurant, hotel list items
export type ListItem = {
	name: string;
	websiteUrl: string;
	address: string;
	mapUrl: string;
	phone: string;
};

export type VenueList = {
	label: string;
	items: ListItem[];
};

// Class list accordion
export type AccordionItem = {
	label: string;
	slot: string;
};

// Class list types
export type ClassListClass = {
	class_number: number;
	class_title: string;
};

export type ClassListDivision = {
	division_title: string;
	sponsor: string;
	classes: ClassListClass[];
};

export type ClassListRing = {
	day: 1 | 2;
	divisions: ClassListDivision[];
	judge: string;
	medal_title: string;
	ring_number: number;
	ring_title: string;
	sponsor: string;
};

// Entry form

// Pseudo-enum asserts 'as const' to use computed values
export const MembershipEnum = {
	b: 'Both Days',
	day1: dayOneDayOfWeek + ' Only',
	day2: dayTwoDayOfWeek + ' Only',
} as const;

export const TableEnum = {
	n: 'No',
	yday1: 'Yes: ' + dayOneDayOfWeek + ' Only',
	yday2: 'Yes: ' + dayTwoDayOfWeek + ' Only',
	yboth: 'Yes: Both Days',
} as const;

// Zod enums need to be hardcoded to work correctly
export const zMembershipEnum = z.enum(['both', 'day1', 'day2']);
export const zTableEnum = z.enum(['n', 'yday1', 'yday2', 'yboth']);

export type EntryForm = {
	name: string;
	email: string;
	membership: z.infer<typeof zMembershipEnum>;
	table: z.infer<typeof zTableEnum>;
};

export const defaultFormState: EntryForm = {
	name: '',
	email: '',
	membership: 'both',
	table: 'n',
};
