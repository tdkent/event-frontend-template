<script setup lang="ts">
	// Import
	import { ChevronRightIcon } from '@heroicons/vue/24/outline';
	// Modal
	const isOpen = ref(false);
	const modalHeader = 'Region 2 Card Format';
	function closeModal() {
		isOpen.value = false;
	}
</script>

<template>
	<div class="group mb-4 mt-6 flex items-center gap-0.5">
		<ChevronRightIcon class="h-3 w-3" />
		<a
			role="button"
			class="text-sm"
			@click="isOpen = true"
			>View card format example</a
		>
	</div>
	<MainModal
		v-model="isOpen"
		:header="modalHeader"
		:close="closeModal">
		<RulesModalContent />
	</MainModal>
</template>
