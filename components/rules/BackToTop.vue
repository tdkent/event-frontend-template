<script setup lang="ts">
	// Imports
	import { ArrowUpCircleIcon } from '@heroicons/vue/24/solid';
	// Props
	const { show } = defineProps<{ show: Boolean }>();
</script>

<template>
	<a
		href="#"
		role="button"
		class="fixed bottom-0 right-0 mb-6 mr-6 flex w-fit items-center justify-end gap-x-2 place-self-end whitespace-nowrap rounded-xl bg-black/50 px-4 py-2 text-sm text-white transition-opacity duration-300 lg:hidden"
		:class="show ? 'opacity-100' : 'opacity-0'">
		<ArrowUpCircleIcon class="h-4 w-4" />
	</a>
</template>
