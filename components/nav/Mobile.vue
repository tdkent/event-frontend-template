<script setup lang="ts">
	// Imports
	import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid';
	// Internal Imports
	import { navLinks } from '~/data/nav';
	// State
	const isOpen = ref(false);
</script>

<template>
	<div>
		<!-- Open Slideover Button -->
		<UButton
			color="white"
			variant="ghost"
			@click="isOpen = true">
			<Bars3Icon class="size-8 fill-white" />
		</UButton>
		<!-- Slideover -->
		<USlideover v-model="isOpen">
			<div>
				<!-- Close Slideover Button -->
				<UButton
					color="white"
					variant="ghost"
					class="absolute end-4 top-4 z-10"
					@click="isOpen = false">
					<XMarkIcon class="size-8 fill-gray-500" />
				</UButton>
				<div class="mt-16 h-full px-6">
					<!-- Slideover Header -->
					<div class="mt-8 flex justify-center pb-4">
						<div class="h-20 w-20 rounded-full bg-gray-50 ring-1 ring-gray-300">
							<img
								alt="Logo image with a brown horse"
								role="img"
								class="h-20 w-20 rounded-full"
								src="~/assets/icon/NotoV1HorseFace.svg" />
						</div>
					</div>
					<!-- Slideover Navigation -->
					<nav class="mt-6">
						<ul>
							<li
								v-for="link in navLinks"
								:key="link.label"
								class="border-b border-gray-200 py-4">
								<NuxtLink
									class="font-script text-3xl text-gray-500"
									:to="link.to"
									@click="isOpen = false"
									>{{ link.label }}</NuxtLink
								>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</USlideover>
	</div>
</template>

<style lang="css" scoped>
	.router-link-active {
		color: #2bb0ed;
	}
</style>
