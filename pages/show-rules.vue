<script setup lang="ts">
	// Metadata
	useHead({
		title: 'Show Rules',
	});
	// Intersection API
	const intersectPoint: globalThis.Ref<Element | null> = ref(null);
	const showButton = ref(false);
	onMounted(() => {
		const observer = new IntersectionObserver(handleIntersection);
		observer.observe(intersectPoint.value as Element);
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
	<div class="main-content relative">
		<h2>Rules &amp; Regulations</h2>
		<RulesBackToTop
			v-if="viewport.isLessThan('lg')"
			:show="showButton" />
		<div ref="intersectPoint" />
		<RulesMobileSubNav v-if="viewport.isLessThan('lg')" />
		<div class="lg:grid lg:grid-cols-4 lg:gap-8">
			<RulesContent class="lg:col-span-3" />
			<RulesDesktopSubNav
				v-if="viewport.isGreaterOrEquals('lg')"
				:show="showButton"
				class="lg:col-span-1" />
		</div>
	</div>
</template>
