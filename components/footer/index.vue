<script setup lang="ts">
	import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';
</script>
<template>
	<footer
		class="flex h-20 flex-col items-start gap-2.5 border-t border-gray-400 bg-gray-200 p-4 text-xs text-gray-700">
		<p>Copyright &copy; 2024 Gold Country Model Horse Show</p>
		<p>
			Website developed by
			<NuxtLink
				to="https://www.timdkent.com/"
				target="_blank"
				class="link peer">
				Tim Kent
			</NuxtLink>
			<ArrowTopRightOnSquareIcon
				class="hidden size-4 -translate-y-0.5 stroke-teal-600 peer-hover:inline" />
		</p>
	</footer>
</template>
