<script setup lang="ts">
	// Imports
	import type { EntryForm } from '~/models';
	// State
	const formData = useState<EntryForm>('formState');
</script>

<template>
	<UModal
		>{{ formData.name }}
		<div>{{ formData.email }}</div>
	</UModal>
</template>
