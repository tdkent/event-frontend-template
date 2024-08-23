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
			<UVerticalNavigation :links="showRulesLinks" />
		</template>
	</UAccordion>
</template>
