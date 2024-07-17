<script setup lang="ts">
	import { Bars3Icon } from '@heroicons/vue/24/solid';
	const isOpen = ref(false);
</script>

<template>
	<div>
		<UButton
			color="white"
			variant="ghost"
			size="xl"
			@click="isOpen = true">
			<Bars3Icon class="size-8 fill-white" />
		</UButton>
		<USlideover v-model="isOpen">
			<div class="p-4 flex-1">
				<UButton
					color="gray"
					variant="ghost"
					size="sm"
					icon="i-heroicons-x-mark-20-solid"
					class="flex sm:hidden absolute end-5 top-5 z-10"
					square
					padded
					@click="isOpen = false" />
				<div class="h-full bg-green-400">Hello world</div>
			</div>
		</USlideover>
	</div>
</template>
