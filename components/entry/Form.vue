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
		class="my-12 space-y-8 rounded-lg border bg-gray-50 p-4"
		@submit="onSubmit">
		<UFormGroup
			label="Name"
			name="name"
			class="input-required">
			<UInput v-model="state.name" />
		</UFormGroup>
		<UFormGroup
			label="Email"
			name="email"
			class="input-required">
			<UInput v-model="state.email" />
		</UFormGroup>
		<UFormGroup
			label="Phone"
			name="phone">
			<UInput v-model="state.phone" />
		</UFormGroup>
		<URadioGroup
			v-model="state.membership"
			legend="Membership Type"
			:options="membershipTypeOptions"
			class="legend-required" />
		<URadioGroup
			v-model="state.table"
			legend="Extra Table?"
			:options="tableOptions"
			class="legend-required" />
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
