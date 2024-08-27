<script setup lang="ts">
	// Imports
	import {
		MapPinIcon,
		PhoneIcon,
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
			class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 md:py-8 lg:grid-cols-3 xl:grid-cols-3">
			<div
				v-for="item in list.items"
				:key="item.name"
				class="flex h-40 flex-col justify-evenly rounded-2xl border px-6 transition-transform duration-300 md:h-60 md:border md:border-gray-200 md:px-6 md:shadow-[1px_1px_1px_0_rgba(0,0,0,0.3)] md:hover:scale-105 lg:h-64 lg:justify-between lg:py-6 dark:border-blue-900">
				<h4
					class="mt-0 text-sm normal-case text-blue-600 md:text-base lg:text-lg dark:text-blue-400">
					{{ item.name }}
				</h4>
				<div class="flex flex-col gap-2 text-xs md:gap-4 md:text-sm">
					<span class="flex items-center gap-4">
						<PhoneIcon class="h-3 w-3 stroke-gray-500 lg:h-4 lg:w-4" />{{
							item.phone
						}}
					</span>
					<span class="flex items-center">
						<MapPinIcon class="h-3 w-3 stroke-gray-500 lg:h-4 lg:w-4" />
						<NuxtLink
							target="_blank"
							rel="noopener"
							:to="item.mapUrl"
							class="peer ml-4 hover:text-teal-600 dark:hover:text-teal-400">
							{{ item.address }}
						</NuxtLink>
						<ArrowTopRightOnSquareIcon
							class="ml-1 hidden size-4 stroke-teal-600 peer-hover:inline dark:stroke-teal-400" />
					</span>
				</div>
				<span class="flex items-center text-xs">
					<NuxtLink
						target="_blank"
						rel="noopener"
						:to="item.websiteUrl"
						class="peer font-splash font-medium uppercase text-blue-600 hover:text-teal-600 dark:text-blue-400 dark:hover:text-teal-400">
						Learn More
					</NuxtLink>
					<ArrowTopRightOnSquareIcon
						class="ml-1 hidden size-4 stroke-teal-600 peer-hover:inline dark:stroke-teal-400" />
				</span>
			</div>
		</div>
	</section>
</template>
