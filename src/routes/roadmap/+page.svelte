<script>
	import logo from '$lib/images/svelte-logo.svg';
	import tic_tac from '$lib/images/tic-tac-toe.svg';
</script>

<svelte:head>
	<title>Roadmap</title>
	<meta name="description" content="Roadmap" />
</svelte:head>

<div class="text-column w-full">
	<div class="flex flex-col">
		<h1 class="mm:text-[3.5em] sm:text-[5.25em] text-white text-center opacity-[.95] pt-[1em] uppercase font-extrabold ">
			ROADMAP
		</h1>

		<p class="text-white opacity-[0.75] text-center leading-[1.5em]">
			Мы рады поделиться с вами дорожной картой нашего проекта.
		</p>
	</div>

	<div class="grid grid-rows-4 gap-6 pt-[5em]">
		<div class="grid grid-cols-3 mm:h-[18vh] sm:h-[20vh] w-full mx-auto bg-black rounded-[15px] shadow-green-500" style="box-shadow: #22c55e .5em 0em 0em 0em;">
			<div class="col relative h-full w-full overflow-hidden">
				<h1 class="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 flex items-center justify-start
				 	h-full mm:text-[6.5em] sm:text-[12em] mm:p-0 sm:pb-3 text-white opacity-[0.15] font-extrabold">
					1
				</h1>
			</div>

			<div class="col flex items-center justify-center h-full w-full overflow-hidden">
				<ul class="w-full mx-auto">
					<li class="flex flex-row items-center mm:text-[.85em] sm:text-[1em] text-white opacity-[.75] font-bold"><div class="bg-green-400 size-2 me-2 rounded-full"></div> Launch</li>
					<li class="flex flex-row items-center mm:text-[.85em] sm:text-[1em] text-white opacity-[.75] font-bold"><div class="bg-green-400 size-2 me-2 rounded-full"></div> Farming</li>
					<li class="flex flex-row items-center mm:text-[.85em] sm:text-[1em] text-white opacity-[.75] font-bold"><div class="bg-green-400 size-2 me-2 rounded-full"></div> Frens</li>
					<li class="flex flex-row items-center mm:text-[.85em] sm:text-[1em] text-white opacity-[.75] font-bold"><div class="bg-green-400 size-2 me-2 rounded-full"></div> Tasks</li>
					<li class="flex flex-row items-center mm:text-[.85em] sm:text-[1em] text-white opacity-[.75] font-bold"><div class="bg-green-400 size-2 me-2 rounded-full"></div> 500.000 Followers</li>
				</ul>
			</div>

			<div class="col bg-svg-1 h-full w-full">
				<!-- <img class="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2"
					src={} alt="SvelteKit" /> -->
			</div>
		</div>

		<div class="grid grid-cols-3 mm:h-[18vh] sm:h-[20vh] w-full mx-auto bg-black rounded-[15px]" style="box-shadow: #22c55e .5em 0em 0em 0em;">
			<div class="col relative h-full w-full overflow-hidden">
				<h1 class="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 flex items-center justify-start
				 	h-full mm:text-[7em] sm:text-[12em] mm:p-0 sm:pb-3 text-white opacity-[0.15] font-extrabold">
					2
				</h1>
			</div>

			<div class="col flex items-center justify-center h-full w-full overflow-hidden">
				<ul class="w-full mx-auto">
					<li class="flex flex-row items-center mm:text-[.85em] sm:text-[1em] text-white opacity-[.75] font-bold"><div class="bg-green-400 size-2 me-2 rounded-full"></div> Launch</li>
					<li class="flex flex-row items-center mm:text-[.85em] sm:text-[1em] text-white opacity-[.75] font-bold"><div class="bg-green-400 size-2 me-2 rounded-full"></div> Farming</li>
					<li class="flex flex-row items-center mm:text-[.85em] sm:text-[1em] text-white opacity-[.75] font-bold"><div class="bg-green-400 size-2 me-2 rounded-full"></div> Frens</li>
					<li class="flex flex-row items-center mm:text-[.85em] sm:text-[1em] text-white opacity-[.75] font-bold"><div class="bg-green-400 size-2 me-2 rounded-full"></div> Tasks</li>
					<li class="flex flex-row items-center mm:text-[.85em] sm:text-[1em] text-white opacity-[.75] font-bold"><div class="bg-green-400 size-2 me-2 rounded-full"></div> 500.000 Followers</li>
				</ul>
			</div>

			<div class="col bg-svg-1 relative h-full w-full">
				<!-- <img class="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2"
					src={} alt="SvelteKit" /> -->
			</div>
		</div>

		<div class="grid grid-cols-3 mm:h-[18vh] sm:h-[20vh] w-full mx-auto bg-black rounded-[15px]" style="box-shadow: #111 .5em 0em 0em 0em;">
			<div class="col relative h-full w-full flex overflow-hidden">
				<h1 class="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 flex items-center justify-start
				 	h-full mm:text-[7em] sm:text-[12em] mm:p-0 sm:pb-3 text-white opacity-[0.15] font-extrabold">
					3
				</h1>
			</div>

			<div class="col flex items-center justify-center h-full w-full overflow-hidden">
				<ul class="w-full mx-auto">
					<li class="flex flex-row items-center mm:text-[.85em] sm:text-[1em] text-white opacity-[.75] font-bold"><div class="bg-green-400 size-2 me-2 rounded-full"></div> Launch</li>
					<li class="flex flex-row items-center mm:text-[.85em] sm:text-[1em] text-white opacity-[.75] font-bold"><div class="bg-green-400 size-2 me-2 rounded-full"></div> Farming</li>
					<li class="flex flex-row items-center mm:text-[.85em] sm:text-[1em] text-white opacity-[.75] font-bold"><div class="bg-green-400 size-2 me-2 rounded-full"></div> Frens</li>
					<li class="flex flex-row items-center mm:text-[.85em] sm:text-[1em] text-white opacity-[.75] font-bold"><div class="bg-white opacity-[.5] size-2 me-2 rounded-full"></div> Tasks</li>
					<li class="flex flex-row items-center mm:text-[.85em] sm:text-[1em] text-white opacity-[.75] font-bold"><div class="bg-white opacity-[.5] size-2 me-2 rounded-full"></div> 500.000 Followers</li>
				</ul>
			</div>

			<div class="col bg-svg-1 relative h-full w-full">
				<!-- <img class="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2"
					src={} alt="SvelteKit" /> -->
			</div>
		</div>

		<div class="grid grid-cols-3 mm:h-[18vh] sm:h-[20vh] w-full mx-auto bg-black rounded-[15px]" style="box-shadow: #111 .5em 0em 0em 0em;">
			<div class="col relative h-full w-full overflow-hidden">
				<h1 class="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 flex items-center justify-start
				 	h-full mm:text-[7em] sm:text-[12em] mm:p-0 sm:pb-3 text-white opacity-[0.15] font-extrabold">
					4
				</h1>
			</div>

			<div class="col flex items-center justify-center h-full w-full overflow-hidden">
				<ul class="w-full mx-auto">
					<li class="flex flex-row items-center mm:text-[.85em] sm:text-[1em] text-white opacity-[.75] font-bold"><div class="bg-white opacity-[.5] size-2 me-2 rounded-full"></div> Launch</li>
					<li class="flex flex-row items-center mm:text-[.85em] sm:text-[1em] text-white opacity-[.75] font-bold"><div class="bg-white opacity-[.5] size-2 me-2 rounded-full"></div> Farming</li>
					<li class="flex flex-row items-center mm:text-[.85em] sm:text-[1em] text-white opacity-[.75] font-bold"><div class="bg-white opacity-[.5] size-2 me-2 rounded-full"></div> Frens</li>
					<li class="flex flex-row items-center mm:text-[.85em] sm:text-[1em] text-white opacity-[.75] font-bold"><div class="bg-white opacity-[.5] size-2 me-2 rounded-full"></div> Tasks</li>
					<li class="flex flex-row items-center mm:text-[.85em] sm:text-[1em] text-white opacity-[.75] font-bold"><div class="bg-white opacity-[.5] size-2 me-2 rounded-full"></div> 500.000 Followers</li>
				</ul>
			</div>

			<div class="col bg-svg-1 relative h-full w-full">
				<!-- <img class="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2"
					src={} alt="SvelteKit" /> -->
			</div>
		</div>
	</div>
</div>

<style>
	.bg-svg-1 {
		background-image: url("/src/lib/images/tic-tac-toe.svg");
		background-repeat: repeat;
		position: relative;
		opacity: .3;
		box-shadow: inset rgb(0, 0, 0) 0em 1.5em 5em 2em;
		border-radius: 15px;
	}
</style>
