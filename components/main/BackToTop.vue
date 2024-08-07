<script setup lang="ts">
	import { ArrowUpCircleIcon } from '@heroicons/vue/24/solid';
	const route = useRoute();
</script>

<template>
	<a
		v-if="route.path === '/show-rules'"
		href="#"
		class="sticky bottom-4 left-full mb-6 mr-6 flex w-fit items-center justify-end gap-x-2 place-self-end whitespace-nowrap rounded-xl bg-black/50 px-4 py-2 text-sm text-white transition-opacity duration-300 lg:hidden">
		<ArrowUpCircleIcon class="h-4 w-4"
	/></a>
</template>
