<script setup lang="ts">
	import { ArrowUpCircleIcon } from '@heroicons/vue/24/solid';
	const route = useRoute();
	console.log('🚀 ~ route:', route.path);
</script>

<template>
	<!-- <a
      href="#"
      className={`${pathname === "/" && "hidden"} ${
        isPageHeaderVisible ? "opacity-0" : "opacity-100"
      } sticky bottom-6 left-full mb-6 mr-6 flex w-fit items-center justify-end gap-x-2 place-self-end whitespace-nowrap rounded-xl bg-black/60 p-4 text-white transition-opacity duration-300 dark:bg-neutral-500/75 max-lg:hidden`}
    >
      Back to top
      <ArrowUpCircleIcon className="h-4 w-4" />
    </a> -->
	<a
		href="#"
		:class="[route.path === '/' && 'hidden']"
		class="sticky bottom-6 left-full mb-6 mr-6 flex w-fit items-center justify-end gap-x-2 place-self-end whitespace-nowrap rounded-xl bg-black/60 p-4 text-sm text-white transition-opacity duration-300 lg:hidden">
		Back
		<ArrowUpCircleIcon class="h-4 w-4"
	/></a>
</template>
