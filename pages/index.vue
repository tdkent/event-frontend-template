<script setup lang="ts">
	// Imports
	import { BuildingLibraryIcon, ClockIcon } from '@heroicons/vue/24/outline';
	// Internal Imports
	import {
		dayOneDayOfWeek,
		dayOneTableRows,
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
					<!-- {{ dayOneLongDateString }} -->
					{{ dayOneDayOfWeek }}
					<span
						class="mx-0.5 bg-teal-300 px-1.5 font-splash font-light text-gray-50 dark:bg-teal-400">
						TBD</span
					>
					2025
				</p>
				<p class="font-serif text-2xl lg:text-3xl">
					<!-- {{ dayTwoLongDateString }} -->
					{{ dayTwoDayOfWeek }}
					<span
						class="mx-0.5 bg-teal-300 px-1.5 font-splash font-light text-gray-50 dark:bg-teal-400">
						TBD</span
					>
					2025
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
				<div class="info-box flex min-h-20 justify-between">
					<div class="flex w-1/2 items-center gap-2 lg:justify-center">
						<div class="rounded-full p-1.5">
							<BuildingLibraryIcon class="icon-blue h-5 w-5" />
						</div>
						<span class="text-xs uppercase">Location</span>
					</div>
					<div class="flex w-1/2 items-center text-left text-sm">
						<p>
							<span
								class="mx-0.5 bg-teal-300 px-1.5 font-splash font-light text-gray-50 dark:bg-teal-400">
								TBD</span
							>
							Davis, CA
						</p>
					</div>
				</div>
				<!-- Show Times -->
				<div class="info-box flex min-h-20 justify-between">
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
				<h3 class="mt-4">NAMHSA</h3>
				<p>
					Any horse placing 1st or 2nd in its NAN-qualifying class will receive
					a NAN card and be eligible to enter the 2025-2028
					<NuxtLink
						to="https://namhsa.org/"
						target="_blank"
						rel="noopener"
						class="link font-semibold">
						North American Model Horse Shows Association</NuxtLink
					>
					national show.
				</p>
				<h3>Golden West Champ Show</h3>
				<p>
					This show will be a qualifier for the 2025 and 2026
					<NuxtLink
						to="https://r2champshow.weebly.com/"
						target="_blank"
						rel="noopener"
						class="link font-semibold"
						>Golden West Champ Shows</NuxtLink
					>
					for Region 2.
				</p>
				<h3>Awards &amp; Prizes</h3>
				<p>
					Custom ribbons to 5th place in all classes. Rosettes to Champions and
					Reserves.
				</p>
				<h3>Raffle</h3>
				<p>
					A number of items will be available for raffle at the show. Please let
					us know if you have items you would like to donate to the raffle.
				</p>
			</div>
		</section>
	</div>
</template>
