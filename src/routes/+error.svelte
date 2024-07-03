<script lang="ts">
	import { page } from '$app/stores';

	let status: number = $page.status;
	let message: string = $page.error?.message ?? '';
	
	interface Emojis {
		[key: number]: string;
	}

	const emojis: Emojis = {
	420: '🍁',
	500: '🤕',
	};
</script>

<div class="error flex flex-col justify-center items-center">
	<h1 class="mm:text-[2em] sm:text-[3.5em] text-white opacity-[.95] leading-[2em] uppercase font-extrabold">{status} <span class="text-orange-500">{message}</span></h1>
	<span class="mm:text-[5em] sm:text-[5em] text-white opacity-[.95] leading-[1.5em] uppercase font-extrabold">
		{emojis[$page.status] ?? emojis[500]}
	</span>
</div>

<style>
	.error {
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}
</style>
