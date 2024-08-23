<script setup lang="ts">
	const viewport = useViewport();
</script>

<template>
	<header id="header">
		<div class="border-b">
			<div class="mx-auto max-w-screen-xl">
				<div class="flex flex-col pt-2 md:px-8 lg:pt-4 xl:px-4">
					<div class="flex items-center justify-between">
						<HeaderNavMobile v-if="viewport.isLessThan('lg')" />
						<HeaderText />
						<HeaderDarkModeSwitch v-if="viewport.isLessThan('lg')" />
					</div>
					<div
						v-if="viewport.isGreaterOrEquals('lg')"
						class="flex justify-between">
						<HeaderNavDesktop />
						<HeaderDarkModeSwitch />
					</div>
				</div>
			</div>
		</div>
		<HeaderSplash />
	</header>
</template>
