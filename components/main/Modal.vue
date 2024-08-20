<script setup lang="ts">
	// Imports
	import { XCircleIcon } from '@heroicons/vue/24/outline';
	// Props
	const { header } = defineProps<{
		header: string;
		close: () => void;
	}>();
</script>

<template>
	<UModal class="top-4">
		<UCard>
			<template #header>
				<div class="flex justify-center">
					<span class="text-xl">{{ header }}</span>
				</div>
			</template>

			<slot />

			<template #footer>
				<div class="flex items-center justify-center">
					<UButton
						color="gray"
						variant="ghost"
						size="xl"
						@click="close">
						<XCircleIcon class="size-5" />
						Close
					</UButton>
				</div>
			</template>
		</UCard>
	</UModal>
</template>
