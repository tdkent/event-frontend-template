<script setup lang="ts">
	const viewport = useViewport();
</script>

<template>
	<header id="header">
		<HeaderShowDates />
		<div class="flex h-16 items-center border-b">
			<HeaderNavMobile
				v-if="viewport.isLessThan('lg')"
				class="flex grow justify-center" />
			<HeaderText />
			<HeaderDarkModeSwitch class="flex grow justify-center" />
		</div>
		<HeaderSplash />
	</header>
</template>
