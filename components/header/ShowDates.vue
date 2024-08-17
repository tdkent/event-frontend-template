<template>
	<div
		class="flex h-[50px] flex-col items-center border-b bg-blue-950 text-xs text-gray-50">
		<span class="mt-1.5 block font-bold">Event Dates</span>
		<div class="relative flex w-full justify-center">
			<span class="absolute block animate-text-dissolve-1">
				{{ dayOneBriefDateString }} and {{ dayTwoBriefDateString }}
			</span>
			<span class="absolute block animate-text-dissolve-2">
				This event has ended. Join us next time!
			</span>
		</div>
	</div>
</template>
