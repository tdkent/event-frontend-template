<script setup lang="ts">
	// Imports
	import {
		MapPinIcon,
		PhoneIcon,
		GlobeAltIcon,
		ArrowTopRightOnSquareIcon,
	} from '@heroicons/vue/24/outline';
	// Internal Imports
	import venueLists from '~/data/venue';
</script>
<template>
	<section
		v-for="list in venueLists"
		:key="list.label">
		<UDivider :label="list.label" />
		<div
			v-for="item in list.items"
			:key="item.name"
			class="w-full">
			<h4 class="mb-2 mt-6">{{ item.name }}</h4>
			<span class="my-1 flex items-center gap-4 text-sm">
				<PhoneIcon class="h-4 w-4" />{{ item.phone }}
			</span>
			<span class="my-1 flex items-center text-sm">
				<MapPinIcon class="h-4 w-4" />
				<NuxtLink
					target="_blank"
					:to="item.mapUrl"
					class="peer ml-4 hover:text-teal-600 dark:hover:text-teal-400">
					{{ item.address }}
				</NuxtLink>
				<ArrowTopRightOnSquareIcon
					class="ml-1 hidden size-4 stroke-teal-600 peer-hover:inline dark:stroke-teal-400" />
			</span>
			<span class="my-1 flex items-center text-sm">
				<GlobeAltIcon class="h-4 w-4" />
				<NuxtLink
					target="_blank"
					:to="item.websiteUrl"
					class="peer ml-4 hover:text-teal-600 dark:hover:text-teal-400">
					Visit Website
				</NuxtLink>
				<ArrowTopRightOnSquareIcon
					class="ml-1 hidden size-4 stroke-teal-600 peer-hover:inline dark:stroke-teal-400" />
			</span>
		</div>
	</section>
</template>
