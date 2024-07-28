// Division list
export type Division = {
	id: number;
	name: string;
	day: number;
	judge: string;
};

// Restaurant, hotel list items
export type ListItem = {
	name: string;
	url: string;
	address: string;
	phone: string;
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
	judge_breed: string;
	judge_collect: string;
	medal_title: string;
	ring_number: number;
	ring_title: string;
	sponsor: string;
};
