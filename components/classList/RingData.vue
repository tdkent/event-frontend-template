<script setup lang="ts">
	// Internal Imports
	import type { ClassListRing } from '~/models';
	// Props
	const { data } = defineProps<{ data: ClassListRing[] }>();
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
	<div v-if="judge || judgeBreed || judgeCollect || sponsor">
		<p v-if="judge">Judge: {{ judge }}</p>
		<p v-if="judgeBreed">Judge Breed: {{ judgeBreed }}</p>
		<p v-if="judgeCollect">Judge Collect: {{ judgeCollect }}</p>
		<p v-if="sponsor">Sponsor: {{ sponsor }}</p>
	</div>
	<div
		v-for="d in divisions"
		:key="d.division_title">
		<span>{{ d.division_title }}</span>
		<ClassListClass
			:classes="d.classes"
			:division="d.division_title" />
	</div>
	<ClassListChampion :medal="medalTitle" />
</template>
