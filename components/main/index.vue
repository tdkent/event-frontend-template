<template>
	<main
		class="min-h-[calc(100vh-114px-80px-80px)] px-6"
		:class="$route.path === '/class-list' ? 'mb-16' : 'mb-20'">
		<slot />
	</main>
</template>
