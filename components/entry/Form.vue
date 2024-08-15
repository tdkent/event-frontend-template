<script setup lang="ts">
	// Imports
	import { z } from 'zod';
	// Internal Imports
	import { membershipTypeOptions, tableOptions } from '~/data/form';
	import type { EntryForm } from '~/models';
	import { defaultFormState, MembershipEnum, TableEnum } from '~/models';
	// Form Schema
	const schema = z.object({
		name: z
			.string()
			.trim()
			.min(1, 'Please enter your name')
			.max(36, 'Name exceeds max character limit (36)'),
		email: z.string().trim().email('Please enter a valid email address'),
		membership: MembershipEnum,
		table: TableEnum,
	});
	// Form State
	const formState = useState<EntryForm>('formState', () => defaultFormState);
	const isLoading = ref(false);
	// Modal
	const isOpen = ref(false);
	const modalHeader = 'Event Registration';
	function closeModal() {
		isOpen.value = false;
		// Reset form inputs
		formState.value.name = '';
		formState.value.email = '';
		formState.value.membership = 'both';
		formState.value.table = 'n';
	}
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
	<MainModal
		v-model="isOpen"
		:header="modalHeader"
		:close="closeModal">
		<EntryModalContent
			v-model="isOpen"
			:data="formState" />
	</MainModal>

	<UForm
		ref="formRef"
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
			<template #error="{ error }: { error: string }">
				<div class="absolute ml-0.5 mt-1 h-4">
					{{ error ? error : '' }}
				</div>
			</template>
		</UFormGroup>
		<UFormGroup
			label="Email"
			name="email"
			class="input-required">
			<UInput
				v-model="formState.email"
				:disabled="isLoading" />
			<template #error="{ error }: { error: string }">
				<div class="absolute ml-0.5 mt-1 h-4">
					{{ error ? error : '' }}
				</div>
			</template>
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
