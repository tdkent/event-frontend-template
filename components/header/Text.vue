<script setup lang="ts">
	const viewport = useViewport();
</script>

<template>
	<h1 class="mx-auto w-fit font-header lg:mx-0">
		<template v-if="viewport.isLessThan('lg')">
			<span class="gold-gradient mt-2 block text-center text-lg">
				Gold Country
			</span>
			<span class="gold-gradient block -translate-y-2 text-center text-2xl">
				Model Horse Show
			</span>
		</template>
		<template v-else>
			<span class="gold-gradient text-4xl">Gold Country Model Horse Show</span>
		</template>
	</h1>
</template>
