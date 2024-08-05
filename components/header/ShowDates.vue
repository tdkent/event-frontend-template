<script setup lang="ts">
	const { headerStartDateString, headerEndDateString } = generateShowDates();
</script>

<template>
	<div class="border-b bg-blue-950 py-2 text-center text-xs text-gray-50">
		<span class="block font-bold">Next Show Dates</span>
		<span class="block">
			{{ headerStartDateString }} and {{ headerEndDateString }}
		</span>
	</div>
</template>
