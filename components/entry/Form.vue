<script setup lang="ts">
	// Imports
	import { z } from 'zod';
	// Internal Imports
	import { membershipTypeOptions, tableOptions } from '~/data/form';
	import type { EntryForm } from '~/models';
	import { defaultFormState, zMembershipEnum, zTableEnum } from '~/models';
	import { FORM_MODAL_HEADER } from '~/constants';
	// Form Schema
	const schema = z.object({
		name: z
			.string()
			.trim()
			.min(1, 'Please enter your name')
			.max(36, 'Name exceeds max character limit (36)'),
		email: z.string().trim().email('Please enter a valid email address'),
		membership: zMembershipEnum,
		table: zTableEnum,
	});
	// Form State
	const isLoading = ref(false);
	const isValidationError = ref(false);
	const state = reactive(defaultFormState);
	// Modal
	const isOpen = ref(false);
	const modalState = ref<EntryForm | null>(null);
	function closeModal() {
		isOpen.value = false;
	}
	// Form Submit
	async function onSubmit() {
		// Validate radio group mismatches
		if (state.membership === zMembershipEnum.enum.day1) {
			if (
				state.table === zTableEnum.enum.yday2 ||
				state.table === zTableEnum.enum.yboth
			) {
				isValidationError.value = true;
				return;
			}
		}
		if (state.membership === zMembershipEnum.enum.day2) {
			if (
				state.table === zTableEnum.enum.yday1 ||
				state.table === zTableEnum.enum.yboth
			) {
				isValidationError.value = true;
				return;
			}
		}
		isLoading.value = true;
		modalState.value = { ...state } as EntryForm;
		// Clear form inputs
		state.name = '';
		state.email = '';
		state.membership = zMembershipEnum.enum.both;
		state.table = zTableEnum.enum.no;
		// Simulate network delay
		setTimeout(() => {
			isLoading.value = false;
			isOpen.value = true;
		}, 1000);
	}
</script>

<template>
	<MainModal
		v-model="isOpen"
		:header="FORM_MODAL_HEADER"
		:close="closeModal">
		<EntryModalContent
			v-model="isOpen"
			:data="modalState!" />
	</MainModal>
	<UForm
		ref="formRef"
		:schema="schema"
		:state="state"
		class="mb-12 mt-8 space-y-8 rounded-lg border bg-gray-50 p-4 md:p-8 lg:p-12 dark:border-gray-600 dark:bg-gray-800"
		@submit="onSubmit">
		<UFormGroup
			label="Name"
			name="name"
			class="input-required">
			<UInput
				v-model="state.name"
				:disabled="isLoading" />
			<template #error="{ error }: { error: string }">
				{{ error ? error : '' }}
			</template>
		</UFormGroup>
		<UFormGroup
			label="Email"
			name="email"
			class="input-required">
			<UInput
				v-model="state.email"
				:disabled="isLoading" />
			<template #error="{ error }: { error: string }">
				{{ error ? error : '' }}
			</template>
		</UFormGroup>
		<div class="legend-required relative flex items-start">
			<URadioGroup
				v-model="state.membership"
				legend="Membership Type"
				:options="membershipTypeOptions"
				:disabled="isLoading"
				@change="isValidationError = false" />
		</div>
		<div class="legend-required relative flex items-start">
			<URadioGroup
				v-model="state.table"
				legend="Table Options"
				:options="tableOptions"
				:disabled="isLoading"
				@change="isValidationError = false" />
		</div>
		<div class="h-6 leading-4">
			<span
				v-if="isValidationError"
				class="text-xs text-red-600 lg:text-sm dark:text-red-400">
				Membership and table options have mismatched dates. Please try again.
			</span>
		</div>
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
