<script setup lang="ts">
	// Internal Imports
	import { navLinks } from '~/data/nav';
	//TODO: component could use a slot instead of hardcoding NuxtLink into it?
	// State
	const isOpen = ref(false);
</script>
<template>
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
</template>
