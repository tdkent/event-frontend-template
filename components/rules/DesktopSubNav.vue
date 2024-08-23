<script setup lang="ts">
	// Internal Imports
	import { showRulesLinks } from '~/data/nav';
</script>

<template>
	<div class="mt-8 flex flex-col border-l px-4 dark:border-gray-800">
		<div class="sticky top-4">
			<div class="mb-2">
				<span>On this page</span>
			</div>
			<UVerticalNavigation :links="showRulesLinks" />
		</div>
	</div>
</template>
