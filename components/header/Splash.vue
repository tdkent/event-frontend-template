<script setup lang="ts">
	const route = useRoute();
</script>

<template>
	<div
		v-if="route.path === '/'"
		class="relative flex aspect-[7/5] max-h-[250px] w-full items-center justify-center overflow-hidden md:h-auto md:max-h-[500px] lg:justify-end">
		<img
			src="assets/img/model-horse-1.webp"
			alt="Model of a horse facing left"
			class="splash-slide animate-slide-1 lg:object-[0%_14%]" />
		<img
			src="assets/img/model-horse-4.webp"
			alt="Model horse facing right"
			class="splash-slide animate-slide-2 lg:object-[0%_20%]" />
		<img
			src="assets/img/model-horse-3.webp"
			alt="Model of a horse facing left"
			class="splash-slide animate-slide-3 lg:object-[0%_5%]" />
		<img
			src="assets/img/model-horse-2.webp"
			alt="Model of a horse and rider"
			class="splash-slide animate-slide-4 lg:object-[0%_20%]" />
		<div
			class="absolute h-full w-full bg-[linear-gradient(to_right,rgba(222,145,29,0.9),rgba(247,201,72,0.7),rgba(247,201,72,0.8),rgba(64,195,247,0.7))]"></div>
		<div class="mx-auto w-full max-w-screen-xl">
			<h2
				class="py-0 text-center font-splash font-light text-gray-50 drop-shadow-[2px_2px_1px_rgba(0,0,0,0.4)] max-xl:text-[7vw]/tight lg:px-12 lg:text-right xl:text-8xl/tight">
				<span class="block"> NAMSHA-Approved </span>
				Model Horse Showcase
			</h2>
		</div>
	</div>
</template>
