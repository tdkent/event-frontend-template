<script setup lang="ts">
	import { DocumentTextIcon } from '@heroicons/vue/24/outline';
</script>

<template>
	<div>
		<h2>Entry</h2>
		<section class="mt-10">
			<UDivider label="Entry Form" />
			<div class="flex w-full items-center justify-start gap-4">
				<div
					class="flex h-16 w-16 flex-none items-center justify-center rounded-full border bg-gray-50">
					<DocumentTextIcon class="h-10 w-10 stroke-gray-500 stroke-1" />
				</div>
				<p>
					Please fill out the electronic entry form
					<NuxtLink
						to="https://docs.google.com/forms/d/e/1FAIpQLSeGH28vukKXWPARVIP5kREHRclAI2rhi7gLjY7lEtFRLfbHww/viewform"
						target="_blank"
						class="hover:underline">
						here
					</NuxtLink>
				</p>
			</div>
			<UDivider label="Payment Info" />
			<ul class="show-rules">
				<li>No refunds after September 10.</li>
				<li>Make checks and MO payable to Robin Kent.</li>
				<li>
					PayPal payment accepted to: gcmvs@robinke.netfirms.com. Please include
					any PayPal fees in your payment.
				</li>
				<li>
					Please send checks or money order payments to:
					<div class="mt-4 w-full text-sm">
						<span class="block py-0.5">Gold Country MHS</span>
						<span class="block py-0.5">c/o Robin Kent</span>
						<span class="block py-0.5">2736 Ganges Place</span>
						<span class="block py-0.5">Davis, CA 95616</span>
					</div>
				</li>
			</ul>
		</section>
	</div>
</template>
