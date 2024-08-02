<script setup lang="ts">
	const { medal } = defineProps<{ medal: string }>();
</script>

<template>
	<div
		class="mb-8 mt-16 flex items-center justify-start gap-2 border-b border-t border-gray-300 p-2">
		<img
			alt="Medal icon"
			role="img"
			class="h-12 w-12 rounded-full stroke-1"
			src="~/assets/icon/FluentRibbonStar20Regular.svg" />
		<span class="font-display text-base">{{ medal }}</span>
	</div>
</template>
