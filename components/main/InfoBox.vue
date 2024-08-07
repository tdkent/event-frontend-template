<script setup lang="ts">
	import { ExclamationCircleIcon } from '@heroicons/vue/24/outline';
</script>

<template>
	<div class="info-box my-8 p-6">
		<p class="text-sm leading-6">
			<ExclamationCircleIcon
				class="icon-blue inline h-5 w-5 -translate-y-[1.5px]" />
			<slot></slot>
		</p>
	</div>
</template>
