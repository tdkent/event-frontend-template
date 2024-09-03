<script setup lang="ts">
	// Internal Imports
	import { CARD_MODAL_HEADER } from '~/constants';
	// Modal
	const isOpen = ref(false);
	function closeModal() {
		isOpen.value = false;
	}
</script>

<template>
	<li>
		This is a 3x5-card show. Standard Region 2 card format will be used. Showers
		need to provide a 3x5 index card for each entry; shower's name and horse's
		name go on one side, and the class number, breed, and gender of the horse go
		on the reverse.
		<NuxtLink
			role="button"
			class="link font-semibold"
			@click="isOpen = true"
			>View 3x5 card format example</NuxtLink
		>
	</li>
	<MainModal
		v-model="isOpen"
		:header="CARD_MODAL_HEADER"
		:close="closeModal">
		<RulesModalContent />
	</MainModal>
</template>
