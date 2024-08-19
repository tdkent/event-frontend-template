<script setup lang="ts">
	// Imports
	import { ChevronRightIcon } from '@heroicons/vue/24/outline';
	// Internal Imports
	import { CARD_MODAL_HEADER } from '~/constants';
	// Modal
	const isOpen = ref(false);
	function closeModal() {
		isOpen.value = false;
	}
</script>

<template>
	<div class="group mb-4 mt-6 flex items-center gap-0.5">
		<ChevronRightIcon class="h-3 w-3" />
		<NuxtLink
			role="button"
			class="link text-sm"
			@click="isOpen = true">
			View card format example
		</NuxtLink>
	</div>
	<MainModal
		v-model="isOpen"
		:header="CARD_MODAL_HEADER"
		:close="closeModal">
		<RulesModalContent />
	</MainModal>
</template>
