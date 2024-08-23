<script setup lang="ts">
	// Metadata
	useHead({
		title: 'Show Rules',
	});
	// Intersection API
	const intersectPoint: globalThis.Ref<Element | null> = ref(null);
	const showButton = ref(false);
	onMounted(() => {
		if (viewport.isLessThan('lg')) {
			const observer = new IntersectionObserver(handleIntersection);
			observer.observe(intersectPoint.value as Element);
		}
	});
	const handleIntersection = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				showButton.value = true;
			} else showButton.value = false;
		});
	};
	// Viewport
	const viewport = useViewport();
</script>

<template>
	<div class="relative">
		<h2>Rules &amp; Regulations</h2>

		<template v-if="viewport.isLessThan('lg')">
			<RulesBackToTop :show="showButton" />
			<div ref="intersectPoint" />
			<RulesMobileSubNav />
		</template>

		<RulesContent />
	</div>
</template>
