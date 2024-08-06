<script setup lang="ts">
	const route = useRoute();
	// Yellow 600: 222,145,29
	// Yellow 400: 247,201,72
	// Blue 400: 64,195,247
</script>

<template>
	<div
		v-if="route.path === '/'"
		class="flex aspect-[7/5] max-h-[180px] min-h-[150px] w-full items-center justify-center bg-[linear-gradient(to_right,rgba(222,145,29,0.9),rgba(247,201,72,0.7),rgba(247,201,72,0.8),rgba(64,195,247,0.7)),url('~/assets/img/gold-country-model-horse-display.jpg')] bg-cover bg-center bg-no-repeat">
		<h2 class="px-4 font-serif text-3xl text-gray-50 drop-shadow-md">
			NAMSHA-Approved Model Horse Showcase
		</h2>
	</div>
	<!-- <div
		v-if="route.path === '/'"
		class="flex aspect-[7/5] max-h-[180px] min-h-[150px] w-full items-center justify-center bg-[linear-gradient(to_right,rgba(18,127,191,0.9),rgba(25,146,212,0.7)),url('~/assets/img/gold-country-model-horse-display.jpg')] bg-cover bg-center bg-no-repeat">
		<h2 class="px-4 font-serif text-3xl text-gray-50">
			NAMSHA-Approved Model Horse Showcase
		</h2>
	</div> -->
</template>
