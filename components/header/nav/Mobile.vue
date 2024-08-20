<script setup lang="ts">
	// Imports
	import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
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
			size="md"
			aria-label="Navigation"
			:ui="{ padding: { md: 'p-0' } }"
			@click="isOpen = true">
			<Bars3Icon class="h-8 w-8 stroke-gray-900 dark:stroke-gray-100" />
		</UButton>
		<!-- Slideover -->
		<USlideover v-model="isOpen">
			<div>
				<UButton
					color="white"
					variant="ghost"
					class="absolute start-4 top-4 z-10"
					@click="isOpen = false">
					<XMarkIcon class="size-8" />
				</UButton>
				<div class="mt-12 h-full px-6">
					<div class="border-b pb-4">
						<HeaderText />
					</div>
					<nav>
						<ul>
							<li
								v-for="link in navLinks"
								:key="link.label"
								class="border-b border-gray-200 py-3">
								<NuxtLink
									class="font-serif text-2xl"
									:to="link.to"
									@click="isOpen = false">
									{{ link.label }}
								</NuxtLink>
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
		color: #de911d;
	}
</style>
