<script setup lang="ts">
	const route = useRoute();
</script>

<template>
	<div
		v-if="route.path === '/'"
		class="flex aspect-[7/5] max-h-[250px] w-full items-center justify-center bg-[linear-gradient(to_right,rgba(222,145,29,0.9),rgba(247,201,72,0.7),rgba(247,201,72,0.8),rgba(64,195,247,0.7)),url('~/assets/img/gold-country-model-horse-display.jpg')] bg-cover bg-center bg-no-repeat md:h-auto md:max-h-[500px] lg:justify-end lg:bg-[position:0%_70%] lg:px-12">
		<div class="mx-auto w-full max-w-screen-xl">
			<h2
				class="py-0 text-center font-splash font-light text-gray-50 drop-shadow-[2px_2px_1px_rgba(0,0,0,0.4)] max-xl:text-[7vw]/tight lg:text-right xl:text-8xl/tight">
				<span class="block"> NAMSHA-Approved </span>
				Model Horse Showcase
			</h2>
		</div>
	</div>
</template>
