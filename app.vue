<script setup lang="ts">
	useHead({
		meta: [
			{
				name: 'description',
				content:
					'Gold Country Model Horse Show is a NAMSHA-approved member event that will be held in 2025. The show will be a qualifier for the 2025 and 2026 Golden West Champ Shows for Region 2.',
			},
		],
		htmlAttrs: {
			lang: 'en',
		},
		titleTemplate: (titleChunk) => {
			return titleChunk
				? `${titleChunk} - Gold Country Model Horse Show`
				: 'Gold Country Model Horse Show';
		},
	});
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
