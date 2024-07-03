<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/images/logo-white.svg';
	import { BxlTelegram, BxlTwitter } from 'svelte-boxicons';
	import { onMount } from 'svelte';

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

<header class="sm:ps-[15em] sm:pe-[15em] bg-black">
	<div class="corner">
		<a href="/home">
			<img class="mm:p-2 sm:p-2" src={logo} alt="Salton" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/home">Главная</a>
			</li>
			<li aria-current={$page.url.pathname === '/roadmap' ? 'page' : undefined}>
				<a href="/roadmap">Roadmap</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="social grid grid-cols-2">
		<div class="corner">
			<a href="/home">
				<BxlTelegram class="mm:p-1 sm:p-1 outline-none" color="#ffffff" size="36" />
			</a>
		</div>
		<div class="corner">
			<a href="/home">
				<BxlTwitter class="mm:p-1 sm:p-1 outline-none" color="#ffffff" size="36" />
			</a>
		</div>
	</div>
</header>

<div class="mobile-menu flex-col w-full">
	<div class="border bg-white py-3 flex justify-center gap-1 shadow-xl">
		<div class="group relative px-4 cursor-pointer">
			<button class="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" height="32" width="32">
					<path stroke="currentColor" d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"></path>
				</svg>
			</button>
			<span class="absolute -top-10 left-[50%] -translate-x-[50%] z-5 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
				Home
			</span>
		</div>

		<div class="group relative px-4 cursor-pointer">
			<button class="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height="24" width="24">
					<path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
				</svg>
			</button>
			<span class="absolute -top-10 left-[50%] -translate-x-[50%] z-5 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
				Roadmap
			</span>
		</div>

		<div class="group relative px-4 cursor-pointer">
			<button class="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500 disabled">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height="24" width="24">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
				</svg>
			</button>
			<span class="absolute -top-10 left-[50%] -translate-x-[50%] z-5 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
				Soon...
			</span>
		</div>

		<div class="group relative px-4 cursor-pointer">
			<button class="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500"> 
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height="24" width="24">
					<path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
				</svg>
			</button>
			<span class="absolute -top-10 left-[50%] -translate-x-[50%] z-5 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
				Share
			</span>
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

.corner a {
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

nav {
	display: flex;
	justify-content: center;
	align-items: center;
	--background: transparent;
}

svg {
	width: 2em;
	height: 3em;
	display: block;
}

path {
	fill: var(--background);
}

ul {
	position: relative;
	padding: 0;
	margin: 0;
	height: 3em;
	display: flex;
	justify-content: center;
	align-items: center;
	list-style: none;
	background: var(--background);
	background-size: contain;
}

li {
	position: relative;
	height: 100%;
}

nav a {
	display: flex;
	height: 100%;
	align-items: center;
	padding: 0 .5rem;
	color: #fff;
	font-weight: 500;
	font-size: 0.8rem;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	text-decoration: none;
	transition: color 0.2s linear;
}

a:hover {
	color: var(--color-theme-3);
}
</style>
