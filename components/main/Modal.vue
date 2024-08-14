<script setup lang="ts">
	const { header } = defineProps<{
		header: string;
		close: () => void;
	}>();
</script>

<template>
	<UModal
		class="top-4"
		prevent-close>
		<UCard>
			<template #header>
				<div class="flex justify-center">
					<span class="text-xl">{{ header }}</span>
				</div>
			</template>

			<slot />

			<template #footer>
				<div class="flex items-center justify-end">
					<UButton
						label="Close"
						color="black"
						variant="link"
						size="lg"
						@click="close" />
				</div>
			</template>
		</UCard>
	</UModal>
</template>
