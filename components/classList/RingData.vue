<script setup lang="ts">
	// Imports
	import { UserCircleIcon } from '@heroicons/vue/24/solid';
	import { UserCircleIcon as UserCircleIconOutline } from '@heroicons/vue/24/outline';
	// Internal Imports
	import type { ClassListRing } from '~/models';
	// Props
	const { data } = defineProps<{
		data: ClassListRing[];
	}>();
	const { divisions, judge, medal_title: medalTitle, sponsor } = data[0];
</script>

<template>
	<div class="px-6">
		<!-- JUDGES & SPONSORS -->
		<div
			v-if="judge || sponsor"
			class="mb-8 mt-2 flex w-full flex-col gap-3 rounded border border-teal-500 bg-teal-100 p-2 text-sm md:text-base lg:px-4 lg:text-lg dark:border-teal-900 dark:bg-teal-300 dark:text-teal-900">
			<div
				v-if="judge"
				class="flex gap-2">
				<span class="flex items-center gap-1 font-medium lg:gap-1.5">
					<UserCircleIcon
						class="icon-blue inline h-4 w-4 translate-y-[1px] lg:h-6 lg:w-6" />
					Judges:
				</span>
				<span class="">
					{{ judge }}
				</span>
			</div>
			<div
				v-if="sponsor"
				class="flex gap-2">
				<span class="flex items-center gap-1 font-medium lg:gap-1.5">
					<UserCircleIcon
						class="icon-blue inline h-4 w-4 translate-y-[1px] lg:h-6 lg:w-6" />
					Sponsors:
				</span>
				<span class="">
					{{ sponsor }}
				</span>
			</div>
		</div>
		<!-- CLASS INFO -->
		<div
			v-for="(d, index) in divisions"
			:key="d.division_title">
			<span class="my-4 block font-header text-xl lg:text-2xl">
				{{ d.division_title }}
			</span>
			<span
				v-if="d.sponsor"
				class="block pb-4 pt-2">
				<UserCircleIconOutline class="inline h-4 w-4 -translate-y-[1px]" />
				Sponsor: {{ d.sponsor }}
			</span>
			<ClassListClass
				:index="index"
				:length="divisions.length"
				:classes="d.classes"
				:division="d.division_title" />
		</div>
		<ClassListChampion :medal="medalTitle" />
	</div>
</template>
