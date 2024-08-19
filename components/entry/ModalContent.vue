<script setup lang="ts">
	// Imports
	import { CheckCircleIcon } from '@heroicons/vue/24/outline';
	// Internal Imports
	import type { EntryForm } from '~/models';
	import {
		MembershipEnum,
		TableEnum,
		zMembershipEnum,
		zTableEnum,
	} from '~/models';
	// State
	const formData = useState<EntryForm>('formState');
</script>

<template>
	<div class="flex flex-col gap-8">
		<div class="flex items-center justify-center gap-1">
			<CheckCircleIcon class="size-6 stroke-teal-600" />
			<span class="text-xl text-teal-600">Success!</span>
		</div>
		<div class="text-center">
			<p>
				Thanks {{ formData.name }}, your registration information has been
				received.
			</p>
		</div>
		<div class="info-box border">
			<p class="text-center font-medium">Registration details</p>
			<div class="reg-details flex flex-col gap-1.5 p-4 text-sm">
				<p class="truncate">
					Name: <span>{{ formData.name }}</span>
				</p>
				<p class="truncate">
					Email: <span>{{ formData.email }}</span>
				</p>
				<p>
					Membership:
					<span v-if="formData.membership === zMembershipEnum.enum.both">
						{{ MembershipEnum.b }}
					</span>
					<span v-if="formData.membership === zMembershipEnum.enum.day1">
						{{ MembershipEnum.day1 }}
					</span>
					<span v-if="formData.membership === zMembershipEnum.enum.day2">
						{{ MembershipEnum.day2 }}
					</span>
				</p>
				<p>
					Extra Table Options:
					<span v-if="formData.table === zTableEnum.enum.n">
						{{ TableEnum.n }}
					</span>
					<span v-if="formData.table === zTableEnum.enum['yday1']">
						{{ TableEnum.yday1 }}
					</span>
					<span v-if="formData.table === zTableEnum.enum['yday2']">
						{{ TableEnum.yday2 }}
					</span>
					<span v-if="formData.table === zTableEnum.enum['yboth']">
						{{ TableEnum.yboth }}
					</span>
				</p>
			</div>
		</div>
		<div class="px-4">
			<p class="text-xs italic before:content-['*']">
				Registrations for this event are not being processed at this time.
				Submissions will not be saved or shared.
			</p>
		</div>
	</div>
</template>
