<script setup lang="ts">
	// Internal Imports
	import {
		dayOneDayOfWeek,
		dayTwoDayOfWeek,
		startDayData,
		endDayData,
		startDayAccordionItems,
		endDayAccordionItems,
	} from '#imports';
	// Metadata
	useHead({
		title: 'Class List',
	});
</script>

<template>
	<div class="main-content">
		<h2>Class List</h2>
		<section>
			<UDivider :label="dayOneDayOfWeek" />
			<UAccordion
				multiple
				color="black"
				variant="ghost"
				size="xl"
				class="inner-padding my-4 lg:my-8"
				:items="startDayAccordionItems">
				<template #ring-data="{ item }">
					<UDivider
						class="px-6 pt-0"
						:ui="{ border: { base: 'dark:border-blue-700' } }" />
					<ClassListRingData
						:data="
							startDayData.filter((r) => r.ring_title == item.label.slice(9))
						" />
				</template>
			</UAccordion>
		</section>
		<section>
			<UDivider :label="dayTwoDayOfWeek" />
			<UAccordion
				multiple
				color="black"
				variant="ghost"
				size="xl"
				class="inner-padding my-4 lg:my-8"
				:items="endDayAccordionItems">
				<template #ring-data="{ item }">
					<UDivider
						class="px-6 pt-0"
						:ui="{ border: { base: 'dark:border-blue-700' } }" />
					<ClassListRingData
						:data="
							endDayData.filter((r) => r.ring_title === item.label.slice(9))
						" />
				</template>
			</UAccordion>
		</section>
	</div>
</template>
