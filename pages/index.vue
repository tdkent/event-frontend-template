<script setup>
	// Imports
	import { BuildingLibraryIcon, ClockIcon } from '@heroicons/vue/24/solid';
	// Functions
	const dates = formatDate();
</script>

<template>
	<div>
		<!-- GENERAL INFORMATION -->
		<section>
			<div class="w-fit">
				<h2>Welcome</h2>
			</div>
			<div
				class="w-full flex flex-col items-center border-y border-gray-200 py-5 my-8 gap-y-2">
				<p class="text-gray-400 text-xs uppercase">Next Show Dates</p>
				<p class="font-bold">{{ dates.eventStart }}</p>
				<p class="font-bold">{{ dates.eventEnd }}</p>
			</div>
			<div class="w-full flex flex-col gap-y-6">
				<!-- Location -->
				<div class="flex justify-between w-full px-2">
					<div class="flex items-center gap-2 w-1/2">
						<div class="bg-gray-50 border border-gray-200 rounded-full p-1.5">
							<BuildingLibraryIcon class="h-5 w-5 fill-yellow-500" />
						</div>
						<span class="text-gray-400 uppercase text-xs">Location</span>
					</div>
					<div class="text-sm text-left w-1/2">
						<p>Davis Senior Center</p>
						<p>646 A Street</p>
						<p>Davis, CA 95616</p>
					</div>
				</div>
				<!-- Show Times -->
				<div class="flex justify-between w-full px-2">
					<div class="flex items-center gap-2 w-1/2">
						<div class="bg-gray-50 border border-gray-200 rounded-full p-1.5">
							<ClockIcon class="h-5 w-5 fill-yellow-500" />
						</div>
						<span class="text-gray-400 uppercase text-xs">Show Times</span>
					</div>
					<div class="text-sm text-left w-1/2">
						<p>Doors Open: 8 AM</p>
						<p>Show Starts: 9 AM</p>
						<p>Lunch: 12:30 PM</p>
					</div>
				</div>
			</div>
		</section>
		<!-- DIVISIONS -->
		<section class="my-8">
			<h3>Divisions</h3>
			<div class="my-4">
				<h4 class="text-sm">{{ dates.eventStart }}</h4>
			</div>
		</section>
		<section>
			<h3>Info</h3>
		</section>
	</div>
</template>
