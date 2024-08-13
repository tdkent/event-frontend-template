<script setup lang="ts">
	// Imports
	import { z } from 'zod';
	// Internal Imports
	import { membershipTypeOptions, tableOptions } from '~/data/form';
	import type { EntryForm } from '~/models';
	import { defaultFormState, MembershipEnum, TableEnum } from '~/models';
	// Form Schema
	const schema = z.object({
		name: z.string().trim().min(1, 'Please enter your name'),
		email: z.string().email('Please enter a valid email address'),
		membership: MembershipEnum,
		table: TableEnum,
	});
	// Form State
	const formState = useState<EntryForm>('formState', () => defaultFormState);
	const isLoading = ref(false);
	// Modal
	const isOpen = ref(false);
	// Form Submit
	async function onSubmit() {
		isLoading.value = true;
		// Simulate network delay
		setTimeout(() => {
			isLoading.value = false;
			isOpen.value = true;
		}, 1500);
	}
</script>

<template>
	<EntrySuccessModal v-model="isOpen" />
	<UForm
		:schema="schema"
		:state="formState"
		class="my-12 space-y-8 rounded-lg border bg-gray-50 p-4"
		@submit="onSubmit">
		<UFormGroup
			label="Name"
			name="name"
			class="input-required">
			<UInput
				v-model="formState.name"
				:disabled="isLoading" />
		</UFormGroup>
		<UFormGroup
			label="Email"
			name="email"
			class="input-required">
			<UInput
				v-model="formState.email"
				:disabled="isLoading" />
		</UFormGroup>
		<URadioGroup
			v-model="formState.membership"
			legend="Membership Type"
			:options="membershipTypeOptions"
			class="legend-required"
			:disabled="isLoading" />
		<URadioGroup
			v-model="formState.table"
			legend="Extra Table?"
			:options="tableOptions"
			class="legend-required"
			:disabled="isLoading" />
		<UButton
			type="submit"
			size="xl"
			color="blue"
			block
			:loading="isLoading">
			{{ isLoading ? '' : 'Submit' }}
		</UButton>
	</UForm>
</template>
