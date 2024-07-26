<script setup lang="ts">
	// Imports
	import {
		MapPinIcon,
		PhoneIcon,
		GlobeAltIcon,
	} from '@heroicons/vue/24/outline';
	// Internal Imports
	import { hotelItems } from '~/data/list-items';
</script>

<template>
	<div
		v-for="item in hotelItems"
		:key="item.name"
		class="w-full">
		<h4 class="mb-2 mt-6">{{ item.name }}</h4>
		<span class="my-1 flex items-center gap-4 text-sm">
			<MapPinIcon class="h-4 w-4" />{{ item.address }}
		</span>
		<span class="my-1 flex items-center gap-4 text-sm">
			<PhoneIcon class="h-4 w-4" />{{ item.phone }}
		</span>
		<span class="my-1 flex items-center gap-4 text-sm"
			><GlobeAltIcon class="h-4 w-4" /><NuxtLink
				target="_blank"
				:to="item.url"
				>Visit Website</NuxtLink
			></span
		>
	</div>
</template>
