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
				class="my-8 flex w-full flex-col items-center gap-y-2 border-y border-gray-200 py-5">
				<p class="text-xs uppercase text-gray-400">Next Show Dates</p>
				<p class="font-bold">{{ dates.eventStart }}</p>
				<p class="font-bold">{{ dates.eventEnd }}</p>
			</div>
			<div class="flex w-full flex-col gap-y-6">
				<!-- Location -->
				<div class="flex w-full justify-between px-2">
					<div class="flex w-1/2 items-center gap-2">
						<div class="rounded-full border border-gray-200 bg-gray-50 p-1.5">
							<BuildingLibraryIcon class="h-5 w-5 fill-yellow-500" />
						</div>
						<span class="text-xs uppercase text-gray-400">Location</span>
					</div>
					<div class="w-1/2 text-left text-sm">
						<p>Davis Senior Center</p>
						<p>646 A Street</p>
						<p>Davis, CA 95616</p>
					</div>
				</div>
				<!-- Show Times -->
				<div class="flex w-full justify-between px-2">
					<div class="flex w-1/2 items-center gap-2">
						<div class="rounded-full border border-gray-200 bg-gray-50 p-1.5">
							<ClockIcon class="h-5 w-5 fill-yellow-500" />
						</div>
						<span class="text-xs uppercase text-gray-400">Show Times</span>
					</div>
					<div class="w-1/2 text-left text-sm">
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
