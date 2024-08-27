<script setup lang="ts">
	// Imports
	import { BuildingLibraryIcon, ClockIcon } from '@heroicons/vue/24/outline';
	// Internal Imports
	import {
		dayOneLongDateString,
		dayOneDayOfWeek,
		dayOneTableRows,
		dayTwoLongDateString,
		dayTwoDayOfWeek,
		dayTwoTableRows,
	} from '#imports';
	// Metadata
	useHead({
		title: 'Home',
	});
</script>

<template>
	<div class="main-content">
		<section>
			<!-- Event Dates -->
			<div
				class="my-12 flex w-full flex-col items-center gap-y-2 border-y border-gray-200 py-6 lg:gap-y-4 lg:py-8">
				<span
					class="mb-2 ml-0 mt-0 text-sm font-normal uppercase text-gray-500 dark:text-gray-400">
					Event Dates
				</span>
				<p class="font-serif text-2xl lg:text-3xl">
					{{ dayOneLongDateString }}
				</p>
				<p class="font-serif text-2xl lg:text-3xl">
					{{ dayTwoLongDateString }}
				</p>
				<UButton
					label="Register Now"
					size="lg"
					variant="outline"
					class="mt-2.5 font-semibold transition-all duration-200 hover:scale-110 lg:mt-6"
					to="/entry" />
			</div>
			<div class="inner-padding flex w-full flex-col gap-y-6 lg:gap-y-8">
				<!-- Location -->
				<div class="info-box flex justify-between">
					<div class="flex w-1/2 items-center gap-2 lg:justify-center">
						<div class="rounded-full p-1.5">
							<BuildingLibraryIcon class="icon-blue h-5 w-5" />
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
					<div class="flex w-1/2 items-center gap-2 lg:justify-center">
						<div class="rounded-full p-1.5">
							<ClockIcon class="icon-blue h-5 w-5" />
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
			<div
				class="inner-padding my-4 flex w-full flex-col items-center gap-y-6 lg:gap-y-8">
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
			<div class="inner-padding">
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
					us know if you have items you would like to donate to the raffle.
				</p>
			</div>
		</section>
	</div>
</template>
