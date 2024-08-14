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
export const MembershipEnum = z.enum(['both', 'day1', 'day2']);

export const TableEnum = z.enum(['n', 'y-day1', 'y-day2', 'y-both']);

export type EntryForm = {
	name: string;
	email: string;
	membership: z.infer<typeof MembershipEnum>;
	table: z.infer<typeof TableEnum>;
};

export const defaultFormState: EntryForm = {
	name: '',
	email: '',
	membership: 'both',
	table: 'n',
};
