<script setup lang="ts">
	// Imports
	import type { ClassListClass } from '~/models';
	const { classes, division } = defineProps<{
		classes: ClassListClass[];
		division: string;
	}>();
</script>
<template>
	<div>
		<ul>
			<li
				v-for="c in classes"
				:key="c.class_number">
				{{ c.class_title }}
			</li>
		</ul>
		<span class="block">Champion {{ division }}</span>
	</div>
</template>
