<script setup lang="ts">
	// Metadata
	useHead({
		title: 'Class List',
	});
</script>

<template>
	<div>
		<h2>Class List</h2>
		<section>
			<UDivider :label="dayOneDayOfWeek" />
			<UAccordion
				multiple
				color="black"
				variant="ghost"
				size="xl"
				class="my-6 w-full"
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
			<UDivider :label="dayTwoDayOfWeek" />
			<UAccordion
				multiple
				color="black"
				variant="ghost"
				size="xl"
				class="mt-6 w-full"
				:items="endDayAccordionItems">
				<template #ring-data="{ item }">
					<UDivider class="px-6 pt-0" />
					<ClassListRingData
						:data="
							endDayData.filter((r) => r.ring_title === item.label.slice(9))
						" />
				</template>
			</UAccordion>
		</section>
	</div>
</template>
