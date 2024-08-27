<script setup lang="ts">
	import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';
</script>
<template>
	<footer
		class="h-24 border-t border-gray-400 bg-gray-200 p-4 text-gray-700 lg:px-12 dark:bg-gray-800 dark:text-gray-100">
		<div
			class="mx-auto flex w-full max-w-screen-lg flex-col items-start gap-2.5 text-xs">
			<p>Copyright &copy; 2024 Gold Country Model Horse Show</p>
			<p>
				Website developed by
				<NuxtLink
					to="https://www.timdkent.com/"
					target="_blank"
					rel="noopener"
					class="link peer">
					Tim Kent
				</NuxtLink>
				<ArrowTopRightOnSquareIcon
					class="hidden size-4 -translate-y-0.5 stroke-teal-600 peer-hover:inline dark:stroke-teal-400" />
			</p>
		</div>
	</footer>
</template>
