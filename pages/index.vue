<script setup lang="ts">
	// Imports
	import { BuildingLibraryIcon, ClockIcon } from '@heroicons/vue/24/outline';
	// Internal Imports
	// Functions
	// const { mainStartDateString, mainEndDateString, startDay, endDay } =
	// 	generateShowDates();
</script>

<template>
	<div>
		<section>
			<!-- Show Dates -->
			<div
				class="my-12 flex w-full flex-col items-center gap-y-2 border-y border-gray-200 py-5">
				<p class="text-xs uppercase text-gray-400">Next Show Dates</p>
				<p class="font-serif text-2xl">{{ dayOneLongDateString }}</p>
				<p class="font-serif text-2xl">{{ dayTwoLongDateString }}</p>
			</div>
			<div class="flex w-full flex-col gap-y-6">
				<!-- Location -->
				<div class="info-box flex justify-between">
					<div class="flex w-1/2 items-center gap-2">
						<div class="rounded-full p-1.5">
							<BuildingLibraryIcon class="h-5 w-5 stroke-blue-900" />
						</div>
						<span class="text-xs uppercase">Location</span>
					</div>
					<div class="w-1/2 text-left text-sm">
						<p>Davis Senior Center</p>
						<p>646 A Street</p>
						<p>Davis, CA 95616</p>
					</div>
				</div>
				<!-- Show Times -->
				<div class="info-box flex justify-between">
					<div class="flex w-1/2 items-center gap-2">
						<div class="rounded-full p-1.5">
							<ClockIcon class="h-5 w-5 stroke-blue-900" />
						</div>
						<span class="text-xs uppercase">Show Times</span>
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
		<section class="mb-4 mt-8">
			<UDivider label="Divisions" />
			<div class="my-4 flex flex-col items-center gap-8">
				<!-- Saturday -->
				<HomeDivisionTable
					:data="dayOneTableRows"
					:day="dayOneDayOfWeek" />
				<!-- Sunday -->
				<HomeDivisionTable
					:data="dayTwoTableRows"
					:day="dayTwoDayOfWeek" />
			</div>
		</section>
		<!-- INFO -->
		<section>
			<UDivider label="Event Info" />
			<div>
				<h4 class="mt-4">NAMHSA</h4>
				<p>
					Gold Country Model Horse Show has applied to be a NAMSHA-Approved
					member show; so that any horse placing 1st or 2nd in its
					NAN-qualifying class will receive a NAN card and be eligible to enter
					the 2024-2027 North American Model Horse Showers' Association National
					Show.
				</p>
				<h4>Golden West Champ Show</h4>
				<p>
					This show will be a qualifier for the 2024 and 2025 Golden West Champ
					Shows for Region 2.
				</p>
				<h4>Awards &amp; Prizes</h4>
				<p>
					Custom ribbons to 5th place in all classes. Rosettes to Champions and
					Reserves.
				</p>
				<h4>Raffle</h4>
				<p>
					A number of items will be available for raffle at the show. Please let
					Robin know if you have items you would like to donate to the raffle.
				</p>
				<MainInfoBox class="mb-0">
					If you have any questions regarding the show (classes, judges, etc.)
					or questions about the location (booking rooms, directions, meals),
					please send them to
					<a
						href="mailto:saklani2@gmail.com"
						class="link text-blue-600">
						Robin Kent</a
					>
				</MainInfoBox>
			</div>
		</section>
	</div>
</template>
