<script setup lang="ts">
	const { medal } = defineProps<{ medal: string }>();
</script>

<template>
	<div
		class="mb-8 mt-16 flex items-center justify-start gap-2 border-b border-t border-blue-100 px-1 py-2">
		<img
			alt="Medal icon"
			role="img"
			class="h-12 w-12 stroke-1 lg:h-14 lg:w-14"
			src="~/assets/icon/FluentRibbonStar20Regular.svg" />
		<span class="font-header text-xl lg:text-3xl">{{ medal }}</span>
	</div>
</template>
