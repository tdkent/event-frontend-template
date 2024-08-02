<script setup lang="ts">
	const isOpen = ref(false);
</script>

<template>
	<div class="mb-4 mt-6 flex items-center gap-4">
		<span>See format example:</span>
		<UButton
			label="Open"
			color="blue"
			variant="solid"
			size="md"
			@click="isOpen = true" />
	</div>

	<UModal
		v-model="isOpen"
		class="top-4">
		<UCard
			:ui="{
				ring: '',
				divide: 'divide-y divide-gray-100 dark:divide-gray-800',
			}">
			<template #header>
				<div class="flex justify-center">
					<span class="text-xl">Example 3x5 Card</span>
				</div>
			</template>

			<div class="flex flex-col items-center justify-center gap-4">
				<div
					class="relative flex aspect-[5/3] w-4/5 flex-col items-center justify-center gap-4 border border-gray-400">
					<span class="block italic"><q>Horse Name</q></span>
					<span>Entrant's Name</span>
					<span class="absolute bottom-1 right-2 text-xs">Side A</span>
				</div>
				<div
					class="relative flex aspect-[5/3] w-4/5 flex-col items-center justify-center gap-4 border border-gray-400">
					<span class="block">Class &num;</span>
					<span class="block">Breed</span>
					<span>Gender</span>
					<span class="absolute bottom-1 right-2 text-xs">Side B</span>
				</div>
			</div>

			<template #footer>
				<div class="flex justify-end">
					<UButton
						label="Close"
						color="blue"
						variant="solid"
						size="md"
						@click="isOpen = false" />
				</div>
			</template>
		</UCard>
	</UModal>
</template>
