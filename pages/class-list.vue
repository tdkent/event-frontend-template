<script setup lang="ts">
	import type { ClassListRing } from '~/models';
	// Internal Imports
	import type { AccordionItem } from '~/models';
	import { class_list } from '../data/db/db.json';
	// Coerce imported type
	const classListData = [...class_list] as ClassListRing[];
	// Create accordion data
	const accordionItems: AccordionItem[] = [];
	for (const r of classListData) {
		accordionItems.push({
			label: 'Ring ' + r.ring_number + ' ' + r.ring_title,
			slot: 'ring-data',
		});
	}
</script>

<template>
	<div>
		<h2>Class List</h2>
		<section>
			<h3></h3>
			<UAccordion
				color="white"
				variant="ghost"
				size="xl"
				class="my-10 mt-6 w-full"
				:items="accordionItems">
				<template #ring-data="{ item }">
					<ClassListRingData
						:data="
							classListData.filter((r) => r.ring_title === item.label.slice(7))
						" />
				</template>
			</UAccordion>
		</section>
	</div>
</template>
