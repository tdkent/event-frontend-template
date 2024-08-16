<script setup lang="ts">
	// Imports
	import type { NuxtError } from '#app';
	import {
		ExclamationTriangleIcon,
		ArrowLeftIcon,
	} from '@heroicons/vue/24/outline';
	// Props
	defineProps({
		error: { type: Object as () => NuxtError, required: true },
	});
	// Clear error
	function handleClearError() {
		clearError({ redirect: '/' });
	}
</script>

<template>
	<NuxtLayout>
		<div class="mt-20 flex flex-col items-center justify-center">
			<ExclamationTriangleIcon class="inline size-12 stroke-red-200" />
			<p class="mt-4 overflow-hidden text-clip">
				{{ error.statusMessage || 'An unknown error occurred' }}
			</p>
		</div>
		<div class="mt-20 flex items-center justify-center">
			<UButton
				variant="outline"
				@click="handleClearError">
				<ArrowLeftIcon class="size-4" />
				Home
			</UButton>
		</div>
	</NuxtLayout>
</template>
