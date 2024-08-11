<script setup lang="ts">
	// Imports
	import {
		BuildingLibraryIcon,
		ArrowTopRightOnSquareIcon,
	} from '@heroicons/vue/24/outline';
</script>

<template>
	<div>
		<h2>Venue &amp; Lodging</h2>
		<!-- SHOW LOCATION	 -->
		<section>
			<UDivider label="Show Location" />
			<div class="my-6 flex flex-col justify-center">
				<div class="flex w-full items-center justify-start gap-4">
					<div
						class="flex h-16 w-16 flex-none items-center justify-center rounded-full border border-blue-100 bg-blue-50">
						<BuildingLibraryIcon class="icon-blue h-12 w-12 stroke-1" />
					</div>
					<div>
						<span class="block text-xl">Davis Senior Center</span>
						<span class="block text-lg">646 A St</span>
						<span class="block text-lg">Davis, California 95616</span>
					</div>
				</div>
				<div class="group ml-20 mt-4 flex items-center gap-1 text-sm">
					<NuxtLink
						href="https://maps.app.goo.gl/tE6QcyTB6R1Yot7dA"
						target="_blank"
						class="hover:text-teal-600">
						View location on map
					</NuxtLink>
					<ArrowTopRightOnSquareIcon
						class="hidden size-4 stroke-teal-600 group-hover:inline" />
				</div>
			</div>
		</section>
		<!-- DIRECTIONS -->
		<section>
			<UDivider label="Directions" />
			<div class="my-6 w-full px-4">
				<ul class="list-image-[url(~/assets/icon/ChevronRight.svg)]">
					<li>Take I-80 E to Sacramento</li>
					<li>Exit onto 113 N</li>
					<li>Take exit 28 for Russell Blvd</li>
					<li>Turn right onto Russell Blvd</li>
					<li>Turn left onto A St</li>
				</ul>
			</div>
		</section>
		<!-- NEARBY LOCATIONS -->
		<VenueLists />
	</div>
</template>
