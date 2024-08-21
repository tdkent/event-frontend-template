<script setup lang="ts">
	const viewport = useViewport();
</script>

<template>
	<header id="header">
		<HeaderShowDates />
		<div
			class="flex h-16 items-center border-b lg:h-24 lg:justify-between lg:px-6">
			<HeaderNavMobile v-if="viewport.isLessThan('lg')" />
			<HeaderText />
			<HeaderDarkModeSwitch />
		</div>
		<HeaderSplash />
	</header>
</template>
