<script setup lang="ts">
	// Internal Imports
	import type { Division } from '~/models';
	const { data, day } = defineProps<{ data: Division[]; day: string }>();
</script>

<template>
	<UTable
		:rows="data"
		:columns="tableColumns"
		class="w-full rounded-lg border">
		<template #caption>
			<caption class="p-4 text-left text-xl">
				{{
					day
				}}
			</caption>
		</template>
	</UTable>
</template>
