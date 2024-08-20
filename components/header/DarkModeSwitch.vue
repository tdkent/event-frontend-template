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
	<div>
		<UButton
			variant="ghost"
			color="white"
			aria-label="Color Theme"
			size="md"
			:ui="{ padding: { md: 'p-0' } }"
			@click="isDark = !isDark">
			<SunIcon
				v-show="colorMode.value === 'light'"
				class="h-7 w-7 stroke-gray-900" />
			<MoonIcon
				v-show="colorMode.value === 'dark'"
				class="h-7 w-7 stroke-gray-100" />
		</UButton>
	</div>
</template>
