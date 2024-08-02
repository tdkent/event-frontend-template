<script setup>
	// Imports
	import { BuildingLibraryIcon, ClockIcon } from '@heroicons/vue/24/solid';
	import { EnvelopeIcon } from '@heroicons/vue/24/outline';
	// Internal Imports
	import { divisions } from '~/data/db';
	// Functions
	const {
		showStartDateString,
		showEndDateString,
		showStartDayOfWeek,
		showEndDayOfWeek,
	} = generateShowDates();
	const startDayDivisions = divisions.filter((d) => d.day === 0);
	const endDayDivisions = divisions.filter((d) => d.day === 1);
	const columns = [
		{
			key: 'name',
			label: 'Name',
		},
		{
			key: 'judge',
			label: 'Judges',
		},
	];
</script>

<template>
	<div>
		<h2>Welcome</h2>
		<!-- GENERAL INFORMATION -->
		<section>
			<div
				class="my-8 flex w-full flex-col items-center gap-y-2 border-y border-gray-200 py-5">
				<p class="text-xs uppercase text-gray-400">Next Show Dates</p>
				<p class="font-bold">{{ showStartDateString }}</p>
				<p class="font-bold">{{ showEndDateString }}</p>
			</div>
			<div class="flex w-full flex-col gap-y-6">
				<!-- Location -->
				<div class="bg-subtle flex w-full justify-between p-2">
					<div class="flex w-1/2 items-center gap-2">
						<div class="rounded-full p-1.5">
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
				<div class="bg-subtle flex w-full justify-between p-2">
					<div class="flex w-1/2 items-center gap-2">
						<div class="rounded-full p-1.5">
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
		<section class="mb-4 mt-8">
			<UDivider label="Divisions" />
			<div class="my-4 flex flex-col items-center gap-4">
				<UTable
					:rows="startDayDivisions"
					:columns="columns"
					class="w-full">
					<template #caption>
						<caption class="mb-2">
							{{
								showStartDayOfWeek
							}}
						</caption>
					</template>
				</UTable>
				<UTable
					:rows="endDayDivisions"
					:columns="columns"
					class="w-full">
					<template #caption>
						<caption class="mb-2">
							{{
								showEndDayOfWeek
							}}
						</caption>
					</template>
				</UTable>
			</div>
		</section>
		<!-- INFO -->
		<section>
			<UDivider label="Event Info" />
			<div class="mb-6">
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
				<div class="bg-subtle mt-12 p-4">
					<!-- TODO: add mail icon -->
					<p>
						If you have any questions regarding the show (classes, judges, etc.)
						or questions about the location (booking rooms, directions, meals),
						please send them to
						<EnvelopeIcon class="ml-0.5 inline h-4 w-4 -translate-y-[1.5px]" />
						<a
							href="mailto:saklani2@gmail.com"
							class="ml-1 hover:underline"
							>Robin Kent</a
						>.
					</p>
				</div>
			</div>
		</section>
	</div>
</template>
