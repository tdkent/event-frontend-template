<script setup lang="ts">
	// Internal Imports
	import type { ClassListRing } from '~/models';
	import type { AccordionItem } from '~/models';
	import { class_list } from '../data/db/db.json';
	const { showStartDayOfWeek, showEndDayOfWeek } = generateShowDates();
	// Coerce imported type
	const startDayData = [...class_list].filter(
		(r) => r.day === 1
	) as ClassListRing[];
	const endDayData = [...class_list].filter(
		(r) => r.day === 2
	) as ClassListRing[];
	// NuxtUI Accordion items
	const startDayAccordionItems: AccordionItem[] = [];
	for (const r of startDayData) {
		startDayAccordionItems.push({
			label: 'Ring ' + r.ring_number + ' - ' + r.ring_title,
			slot: 'ring-data',
		});
	}
	const endDayAccordionItems: AccordionItem[] = [];
	for (const r of endDayData) {
		endDayAccordionItems.push({
			label: 'Ring ' + r.ring_number + ' - ' + r.ring_title,
			slot: 'ring-data',
		});
	}
</script>

<template>
	<div>
		<h2>Class List</h2>
		<section>
			<UDivider :label="showStartDayOfWeek" />
			<UAccordion
				multiple
				color="white"
				variant="ghost"
				size="xl"
				class="my-10 mt-6 w-full"
				:ui="{
					container: 'border w-full flex flex-col my-4 rounded-lg bg-gray-50',
					wrapper: 'w-full flex flex-col',
					item: { padding: 'py-8' },
					default: { class: 'py-4 text-sm' },
				}"
				:items="startDayAccordionItems">
				<template #ring-data="{ item }">
					<UDivider class="px-6 pt-0" />
					<ClassListRingData
						:data="
							startDayData.filter((r) => r.ring_title == item.label.slice(9))
						" />
				</template>
			</UAccordion>
		</section>
		<section>
			<UDivider :label="showEndDayOfWeek" />
			<UAccordion
				multiple
				color="white"
				variant="ghost"
				size="xl"
				class="my-10 mt-6 w-full"
				:ui="{
					container: 'border w-full flex flex-col my-4 rounded-lg bg-gray-50',
					wrapper: 'w-full flex flex-col',
					item: { padding: 'py-8' },
					default: { class: 'py-4 text-sm' },
				}"
				:items="endDayAccordionItems">
				<template #ring-data="{ item }">
					<ClassListRingData
						:data="
							endDayData.filter((r) => r.ring_title === item.label.slice(9))
						" />
				</template>
			</UAccordion>
		</section>
	</div>
</template>
