<script setup lang="ts">
	const route = useRoute();
	const { showStartDateStringHeader, showEndDateStringHeader } =
		generateShowDates();
</script>

<template>
	<div
		class="border-b bg-gray-50 py-2.5 text-center text-xs"
		:class="[route.path === '/' && 'hidden']">
		Next Show Dates: {{ showStartDateStringHeader }} &amp;
		{{ showEndDateStringHeader }}
	</div>
</template>
