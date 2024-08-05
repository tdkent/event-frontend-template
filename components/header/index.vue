<template>
	<!-- <header
		class="flex h-16 items-center justify-between border-b border-yellow-500 bg-gradient-to-r from-yellow-400 from-40% to-yellow-600 px-4">
		<div class="flex items-center justify-between gap-4">
			<HeaderLogo />
			<h1 class="translate-y-[-4px] leading-[8px] text-yellow-50">
				<span class="font-display text-xl">Gold Country</span>
				<br />
				<span class="font-script">Model Horse Show</span>
			</h1>
		</div>
		<NavMobile />
	</header> -->
	<header>
		<HeaderShowDates />
		<div class="flex h-16 items-center border-b">
			<HeaderNavMobile class="flex grow justify-center" />
			<h1 class="font-header mx-auto mt-2 w-fit text-center">
				<span class="gold-gradient block text-lg">Gold Country</span>
				<span class="gold-gradient block -translate-y-2 text-2xl"
					>Model Horse Show</span
				>
			</h1>
			<HeaderDarkModeSwitch class="flex grow justify-center" />
		</div>
		<HeaderSplash />
	</header>
</template>
