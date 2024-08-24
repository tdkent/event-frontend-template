<script setup lang="ts">
	// Imports
	import { ArrowUpCircleIcon } from '@heroicons/vue/24/outline';
	// Internal Imports
	import { showRulesLinks } from '~/data/nav';
	// Props
	const { show } = defineProps<{ show: Boolean }>();
</script>

<template>
	<div class="mt-8 flex flex-col border-l px-4 dark:border-gray-800">
		<div class="sticky top-4">
			<div class="mb-2">
				<span>On this page</span>
			</div>
			<UVerticalNavigation
				:links="showRulesLinks"
				:ui="{
					wrapper: 'space-y-2',
					base: 'group block -ms-px before:hidden',
					padding: 'py-1.5 px-0',
					rounded: '',
					font: 'font-light',
					ring: '',
					active:
						'text-gray-600 hover:text-yellow-600 dark:text-gray-100 dark:hover:text-blue-400',
					inactive:
						'border-transparent hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300',
				}" />
			<div
				class="mt-2 transition-opacity duration-300"
				:class="show ? 'opacity-100' : 'opacity-0'">
				<div>
					<NuxtLink
						class="group flex items-center gap-1"
						to="#header">
						<ArrowUpCircleIcon
							class="h-4 w-4 group-hover:stroke-yellow-600 dark:group-hover:stroke-blue-400" />
						<span
							class="text-sm font-[300] group-hover:text-yellow-600 dark:group-hover:text-blue-400">
							Back to top
						</span>
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>
