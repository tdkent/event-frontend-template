// Internal Imports
import { class_list } from '../data/db/db.json';
import type { ClassListRing, AccordionItem, Division } from '~/models';

// Filter by day
export const startDayData = [...class_list].filter(
	(r) => r.day === 1
) as ClassListRing[];
export const endDayData = [...class_list].filter(
	(r) => r.day === 2
) as ClassListRing[];

// Class list accordion
export const startDayAccordionItems: AccordionItem[] = [];
for (const r of startDayData) {
	startDayAccordionItems.push({
		label: 'Ring ' + r.ring_number + ' - ' + r.ring_title,
		slot: 'ring-data',
	});
}
export const endDayAccordionItems: AccordionItem[] = [];
for (const r of endDayData) {
	endDayAccordionItems.push({
		label: 'Ring ' + r.ring_number + ' - ' + r.ring_title,
		slot: 'ring-data',
	});
}

// Divisions table
export const tableColumns = [
	{
		key: 'name',
		label: 'Name',
	},
	{
		key: 'judge',
		label: 'Judges',
	},
];

export const dayOneTableRows: Division[] = startDayData.map((ring) => {
	return { name: ring.ring_title, judge: ring.judge };
});

export const dayTwoTableRows: Division[] = endDayData.map((ring) => {
	return { name: ring.ring_title, judge: ring.judge };
});
