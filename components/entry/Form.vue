<script setup lang="ts">
	// Imports
	import { z } from 'zod';
	import type { FormSubmitEvent } from '#ui/types';
	// Internal Imports
	import { membershipTypeOptions, tableOptions } from '~/data/form';
	// Toast
	const toast = useToast();
	// Form Schema
	const schema = z.object({
		name: z.string(),
		phone: z.string(),
		email: z.string().email('Invalid email'),
	});
	type Schema = z.output<typeof schema>;
	// Form State
	const state = reactive({
		name: undefined,
		phone: undefined,
		email: undefined,
		membership: 'both-days',
		table: 'no',
	});
	const isLoading = ref(false);
	// Form Submit
	async function onSubmit(event: FormSubmitEvent<Schema>) {
		// Do something with data
		console.log(event.data);
		isLoading.value = true;
		setTimeout(() => {
			isLoading.value = false;
			toast.add({ title: 'You have been registered! ' });
		}, 2000);
	}
</script>

<template>
	<UForm
		:schema="schema"
		:state="state"
		class="space-y-4"
		@submit="onSubmit">
		<UFormGroup
			label="Name"
			name="name">
			<UInput v-model="state.name" />
		</UFormGroup>
		<UFormGroup
			label="Phone"
			name="phone">
			<UInput v-model="state.phone" />
		</UFormGroup>
		<UFormGroup
			label="Email"
			name="email">
			<UInput v-model="state.email" />
		</UFormGroup>
		<URadioGroup
			v-model="state.membership"
			legend="Membership Type"
			:options="membershipTypeOptions" />
		<URadioGroup
			v-model="state.table"
			legend="Extra Table?"
			:options="tableOptions" />
		<UButton
			type="submit"
			:loading="isLoading">
			{{ isLoading ? '' : 'Submit' }}
		</UButton>
	</UForm>
</template>
