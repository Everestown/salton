<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/images/logo-white.svg';
	import { BxlTelegram, BxlTwitter, BxlInstagram } from 'svelte-boxicons';
	import { onMount } from 'svelte';

	let isSocialCardVisible: boolean = false;

	function toggleSocialCard(): void {
		isSocialCardVisible = !isSocialCardVisible;

		const socialCard = document.querySelector('.social-card') as HTMLElement;
		socialCard.style.visibility = isSocialCardVisible ? 'visible' : 'hidden';
	}

	onMount(() => {
		const header = document.querySelector('header') as HTMLElement;
		const mobileMenu = document.querySelector('.mobile-menu') as HTMLElement;

		function checkScreenWidth(): void {
			if (window.innerWidth <= 640) {
				mobileMenu.style.display = 'flex';
				header.style.display = 'none';
			} else {
				mobileMenu.style.display = 'none';
				header.style.display = 'flex';
			}
		}

		checkScreenWidth();
		window.addEventListener('resize', checkScreenWidth);
	});
</script>

<header class="pt-1 sm:ps-[1em] sm:pe-[5em] xl:ps-[5em] xl:pe-[10em] bg-black">
	<div class="corner">
		<a href="/home">
			<img class="mm:p-1 sm:p-1" src={logo} alt="Salton" />
		</a>
	</div>

	<div class="social grid grid-cols-4">
		<div class="corner">
			<span class="h-full w-full to-center pe-20">
				<a class="uppercase text-white font-semibold" href="/roadmap">
					Roadmap
				</a>
			</span>
		</div>
		<div class="corner">
			<a class="social-app" href="/home">
				<BxlTelegram class="mm:p-1 sm:p-1 outline-none" color="#ffffff" size="36" />
			</a>
		</div>
		<div class="corner">
			<a class="social-app" href="/home">
				<BxlTwitter class="mm:p-1 sm:p-1 outline-none" color="#ffffff" size="36" />
			</a>
		</div>
		<div class="corner">
			<a class="social-app" href="/home">
				<BxlInstagram class="mm:p-1 sm:p-1 outline-none" color="#ffffff" size="36" />
			</a>
		</div>
	</div>
</header>

<div class="mobile-menu fixed bottom-0 z-[99] flex-col w-full">
	<div class="border-0 bg-[#101010] border-t border-[#1f1f1f] py-2 flex justify-center gap-1 shadow-xl">
		<div class="group relative px-4 cursor-pointer flex flex-col items-center justify-center">
			<a href="/home" class="flex items-center flex-col justify-center">
				<button type="button" class="h-7 w-7 to-center rounded-full text-gray-300">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height="24" width="24">
						<path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
					</svg>					
				</button>
				<!-- <span class="absolute -top-10 left-[50%] -translate-x-[50%] z-5 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
					Home
				</span> -->
				<span class="text-center text-gray-300">Home</span>
			</a>
		</div>

		<div class="group relative px-4 cursor-pointer flex flex-col items-center justify-center">
			<a href="/roadmap" class="flex items-center flex-col justify-center">
				<button type="button" class="h-7 w-7 to-center rounded-full text-gray-300">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height="24" width="24">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
					</svg>
				</button>
				<!-- <span class="absolute -top-10 left-[50%] -translate-x-[50%] z-5 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
					Roadmap
				</span> -->
				<span class="text-center text-gray-300">Roadmap</span>
			</a>
		</div>

		<div class="group relative px-4 cursor-pointer flex flex-col items-center justify-center">
			<a href="#soon" class="flex items-center flex-col justify-center">
				<button type="button" class="h-7 w-7 to-center rounded-ful cursor-not-allowed" disabled>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9CA3AF" height="24" width="24">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
					</svg>
				</button>
				<!-- <span class="absolute -top-10 left-[50%] -translate-x-[50%] z-5 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
					Soon...
				</span> -->
				<span class="text-[#9CA3AF] text-center">Soon</span>
			</a>
		</div>

		<div class="group relative px-4 cursor-pointer flex flex-col items-center justify-center">
			<button type="button" on:click={toggleSocialCard} class="share-btn h-7 w-7 to-center rounded-full text-gray-300"> 
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height="24" width="24">
					<path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
				</svg>
			</button>
			<!-- <span class="absolute -top-10 left-[50%] -translate-x-[50%] z-5 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
				Share
			</span> -->
			<span class="text-center text-gray-300">Share</span>

			<div class="social-card {isSocialCardVisible ? 'social-card-visible' : 'social-card-hidden'}">
				<button class="to-center">
					<BxlTelegram class="mm:p-0 sm:p-0 outline-none" color="#2a2a2a" size="42" />
				</button>

				<button class="to-center">
					<BxlTwitter class="mm:p-0 sm:p-0 outline-none" color="#2a2a2a" size="42" />
				</button>

				<button class="to-center">
					<BxlInstagram class="mm:p-0 sm:p-0 outline-none" color="#2a2a2a" size="42" />
				</button>
			</div>
		</div>
	</div>
</div>

<style>
.mobile-menu {
	display: none;
}

@media (max-width: 640px) {
	.mobile-menu {
		position: fixed;
		bottom: 0;
	}
}

header {
	display: none;
}

@media (min-width: 640px) {
	header {
		justify-content: space-between;
	}
}

.corner {
	width: 4em;
	height: 4em;
}

.corner .social-app {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
}

.corner img {
	width: 100%;
	height: 100%;
	object-fit: contain;
}

svg {
	width: 2em;
	height: 3em;
	display: block;
}

path {
	fill: var(--background);
}

a {
	font-size: 0.8rem;
	letter-spacing: 0.1em;
	text-decoration: none;
	transition: color 0.2s linear;
}

a:hover {
	color: var(--color-theme-3);
}
</style>
