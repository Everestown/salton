<script>

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Главная страница" />
</svelte:head>

<section>
	<h1 class="welcome mm:text-[3.5em] sm:text-[5.25em] text-white opacity-[.95] leading-[1em] uppercase font-extrabold">
		WELCOME
		<!-- <picture>
			<source srcset={welcome} type="image/webp" />
			<img src={welcome_fallback} alt="Welcome" />
		</picture> -->
	</h1>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	.welcome {
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}
</style>
