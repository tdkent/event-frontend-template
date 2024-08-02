<script setup lang="ts">
	// Imports
	import { BuildingLibraryIcon } from '@heroicons/vue/24/outline';
</script>

<template>
	<div>
		<h2>Venue &amp; Lodging</h2>
		<!-- TODO: add 'next show dates' component to all pages -->
		<!-- TODO: add splash image to each page -->
		<section class="mt-10">
			<UDivider label="Show Location" />
			<div class="mt-6 flex w-full items-center justify-start gap-4">
				<div
					class="flex h-16 w-16 flex-none items-center justify-center rounded-full border bg-gray-50">
					<BuildingLibraryIcon class="h-10 w-10 stroke-gray-500 stroke-1" />
				</div>
				<div>
					<span class="block text-xl">Davis Senior Center</span>
					<span class="block text-lg">646 A St</span>
					<span class="block text-lg">Davis, California 95616</span>
				</div>
			</div>
			<VenueGoogleMap />
			<UDivider label="Directions" />
			<div class="mt-6 flex w-full items-center justify-start gap-4">
				<ul class="ml-4 list-disc">
					<li>Take I-80 E to Sacramento</li>
					<li>Exit onto 113 N</li>
					<li>Take exit 28 for Russell Blvd</li>
					<li>Turn right onto Russell Blvd</li>
					<li>Turn left onto A St</li>
				</ul>
			</div>
		</section>
		<section class="mt-10">
			<UDivider label="Nearby Restaurants" />
			<VenueRestaurantList />
		</section>
		<section class="mt-10">
			<UDivider label="Nearby Hotels" />
			<VenueHotelList />
		</section>
	</div>
</template>
