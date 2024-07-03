<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo-white.svg';
	import { BxlTelegram, BxlTwitter } from 'svelte-boxicons';
</script>

<header class="bg-black">
	<div class="corner">
		<a href="/">
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

<style>
	header {
		display: flex;
		justify-content: space-between;
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
