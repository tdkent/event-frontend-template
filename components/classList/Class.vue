<script setup lang="ts">
	// Internal Imports
	import type { ClassListClass } from '~/models';
	// Props
	const { classes, division, index, length } = defineProps<{
		classes: ClassListClass[];
		division: string;
		index: number;
		length: number;
	}>();
</script>
<template>
	<div>
		<ul>
			<li
				v-for="c in classes"
				:key="c.class_number"
				class="py-1">
				{{ c.class_number }}. {{ c.class_title }}
			</li>
		</ul>
		<div class="mb-2 mt-4 flex items-center justify-start gap-1">
			<img
				alt="Small ribbon icon"
				role="img"
				class="h-5 w-5"
				src="~/assets/icon/FluentRibbon20Regular.svg" />
			<span class="text-base">Champion {{ division }}</span>
		</div>
	</div>
	<UDivider v-if="index !== length - 1" />
</template>
