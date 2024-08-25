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
		<div class="flex flex-col items-center justify-center">
			<div class="mt-20 flex flex-col items-center">
				<ExclamationTriangleIcon class="inline size-12 stroke-red-200" />
				<p class="mt-4 overflow-hidden text-clip">
					{{ error.statusMessage || 'An unknown error occurred' }}
				</p>
			</div>
		</div>
		<div class="flex items-center justify-center">
			<UButton
				variant="outline"
				size="lg"
				class="mt-20 font-semibold transition-all duration-200 hover:scale-110"
				@click="handleClearError">
				<ArrowLeftIcon class="size-4" />
				Home
			</UButton>
		</div>
	</NuxtLayout>
</template>
