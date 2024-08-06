<script setup lang="ts">
	// Internal Imports
	import type { ClassListRing } from '~/models';
	// Props
	const { data } = defineProps<{
		data: ClassListRing[];
	}>();
	const {
		divisions,
		judge,
		judge_breed: judgeBreed,
		judge_collect: judgeCollect,
		medal_title: medalTitle,
		sponsor,
	} = data[0];
</script>

<template>
	<div class="px-6">
		<div
			v-if="judge || judgeBreed || judgeCollect || sponsor"
			class="mb-8 mt-4 flex flex-col gap-4 font-semibold">
			<p v-if="judge">Judge: {{ judge }}</p>
			<p v-if="judgeBreed">Judge Breed: {{ judgeBreed }}</p>
			<p v-if="judgeCollect">Judge Collect: {{ judgeCollect }}</p>
			<p v-if="sponsor">Sponsor: {{ sponsor }}</p>
		</div>
		<div
			v-for="(d, index) in divisions"
			:key="d.division_title">
			<span class="my-4 block font-header text-xl">{{ d.division_title }}</span>
			<span
				v-if="d.sponsor"
				class="block pb-4 pt-2 font-semibold"
				>Sponsor: {{ d.sponsor }}</span
			>
			<ClassListClass
				:index="index"
				:length="divisions.length"
				:classes="d.classes"
				:division="d.division_title" />
		</div>
		<ClassListChampion :medal="medalTitle" />
	</div>
</template>
