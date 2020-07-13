<script context="module">
	export async function preload() {
		const sections = await this.fetch(`docs.json`).then(r => r.json());
		return { sections };
	}
</script>

<script>
	import { Docs } from 'svelthree-site-kit';

	export let sections;
</script>

<svelte:head>
	<title>API Docs • Svelte</title>

	<meta name="twitter:title" content="Svelte API docs">
	<meta name="twitter:description" content="Svelte powered three.js development">
	<meta name="Description" content="Svelte powered three.js development">
</svelte:head>

<Docs {sections}/>
