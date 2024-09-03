<script setup lang="ts">
	// Imports
	import {
		BuildingLibraryIcon,
		ArrowTopRightOnSquareIcon,
	} from '@heroicons/vue/24/outline';
	// Metadata
	useHead({
		title: 'Venue & Lodging',
	});
</script>

<template>
	<div class="main-content">
		<h2>Venue &amp; Lodging</h2>
		<!-- SHOW LOCATION	 -->
		<section>
			<UDivider label="Show Location" />
			<div class="my-6 flex flex-col justify-center">
				<div class="flex w-full items-center justify-start gap-4 md:gap-8">
					<div
						class="flex h-16 w-16 flex-none items-center justify-center rounded-full border border-blue-100 bg-blue-50">
						<BuildingLibraryIcon
							class="h-12 w-12 fill-blue-200 stroke-blue-900 stroke-1" />
					</div>
					<div>
						<p class="font-serif text-2xl lg:text-3xl">
							<span
								class="mx-0.5 bg-teal-300 px-1.5 font-splash font-light text-gray-50 dark:bg-teal-400">
								TBD</span
							>
							Davis, California
						</p>
					</div>
				</div>
				<div class="ml-20 mt-6 flex items-center gap-1 text-sm md:ml-24">
					<NuxtLink
						href="https://maps.app.goo.gl/DdBq41QyPreWSzSY9"
						target="_blank"
						rel="noopener"
						class="peer hover:text-teal-600 dark:hover:text-teal-400">
						View location on map
					</NuxtLink>
					<ArrowTopRightOnSquareIcon
						class="hidden size-4 stroke-teal-600 peer-hover:inline dark:stroke-teal-400" />
				</div>
			</div>
		</section>
		<!-- NEARBY LOCATIONS -->
		<VenueLists />
	</div>
</template>
