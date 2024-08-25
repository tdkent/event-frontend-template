<script setup lang="ts">
	// Metadata
	useHead({
		title: 'Entry Form',
	});
</script>

<template>
	<div class="main-content inner-padding">
		<h2>Entry Form</h2>
		<section>
			<div class="w-full">
				<EntryForm />
				<MainInfoBox>
					Please note: This form is for demonstration purposes only.
					Registrations for this event are not being processed at this time.
					Submissions will not be saved or shared.
				</MainInfoBox>
			</div>
		</section>
	</div>
</template>
