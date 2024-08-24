<script setup lang="ts">
	// Internal Imports
	import { showRulesLinks } from '~/data/nav';
</script>

<template>
	<UAccordion
		color="black"
		variant="ghost"
		size="lg"
		class="mt-6"
		:items="[{ label: 'On this page', slot: 'sub-nav' }]">
		<template #sub-nav>
			<UVerticalNavigation
				:ui="{
					active:
						'text-blue-900 dark:text-gray-100 font-[300] before:bg-blue-50 dark:before:bg-blue-900 before:hover:bg-blue-100 dark:before:hover:bg-blue-800 before:hover:rounded-none',
					size: 'text-base',
					padding: 'p-2.5',
					font: 'font-light',
				}"
				:links="showRulesLinks" />
		</template>
	</UAccordion>
</template>
