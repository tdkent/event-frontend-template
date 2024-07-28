<script setup lang="ts">
	const { medal } = defineProps<{ medal: string }>();
</script>

<template>
	<div class="flex items-center justify-start gap-2">
		<div
			class="flex h-8 w-8 items-center justify-center rounded-full border bg-gray-50">
			<img
				alt="Medal icon"
				role="img"
				class="h-6 w-6 rounded-full"
				src="~/assets/icon/FluentEmojiFlatSportsMedal.svg" />
		</div>
		<span class="text-lg">{{ medal }}</span>
	</div>
</template>
