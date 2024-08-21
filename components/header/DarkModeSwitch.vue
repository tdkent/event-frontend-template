<script setup lang="ts">
	// Imports
	import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline';
	// Nuxt color mode
	const colorMode = useColorMode();
	const isDark = computed({
		get() {
			return colorMode.value === 'dark';
		},
		set() {
			colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
		},
	});
</script>

<template>
	<UButton
		variant="ghost"
		color="white"
		aria-label="Color Theme"
		size="md"
		class="flex grow justify-center lg:grow-0"
		:ui="{ padding: { md: 'p-0' } }"
		@click="isDark = !isDark">
		<SunIcon
			v-show="colorMode.value === 'light'"
			class="size-7 stroke-gray-900 lg:size-6" />
		<MoonIcon
			v-show="colorMode.value === 'dark'"
			class="size-7 stroke-gray-100 lg:size-6" />
	</UButton>
</template>
