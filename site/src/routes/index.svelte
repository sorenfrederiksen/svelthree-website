<script>
	import { Blurb, Hero /*, Section*/ } from 'svelthree-site-kit';
	//import Contributors from './_components/Contributors.svelte';
	//import Example from './_components/Example.svelte';
	//import WhosUsingSvelte from './_components/WhosUsingSvelte.svelte';
	// import Lazy from '../components/Lazy.svelte';

	// TODO this causes a Sapper CSS bug...
	// function loadReplWidget() {
	// 	console.log('lazy loading');
	// 	return import('../components/Repl/ReplWidget.svelte').then(mod => mod.default);
	// }
</script>

<style>
	/* darken text for accessibility */
	/* TODO does this belong elsewhere? */
	:global(.back-light) {
		--text: hsl(36, 3%, 44%);
	}

	/*
	.examples {
		background: var(--second);
		color: white;
		overflow: hidden;
	}
	*/
</style>

<svelte:head>
	<title>Svelte • Svelte powered three.js development</title>

	<meta name="twitter:title" content="Svelte">
	<meta name="twitter:description" content="Svelte powered three.js development">
	<meta name="Description" content="Svelte powered three.js development">
</svelte:head>

<Hero
	title="svelthree"
	tagline="Svelte powered three.js development"
	outline="svelthree-logo-outline.svg"
	logotype="svelthree-logotype.svg"
/>

<Blurb>

	<div class="description" slot="what">
		<p>Svelthree is a components library for declarative construction of reactive and reusable Threejs scene graphs utilizing nothing but Svelte and Threejs.<p/>
		<p>Initally created as a proof of concept, svelthree now aims to be a library offering web-developers a declarative, component based, yet familiar, Threejs-API benefiting from Svelte's rapid and friendly developer experience as well as it's high reactive perfomance.</p>

		<!-- <p>Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes.</p> -->

		<p>Explore our <a href="examples/">Examples</a> section and see it for yourself!</p>
		<!-- <p><a href="faq/">See also our FAQ section</a> to learn more.</p> -->
	</div>

	<div style="grid-area: start; display: flex; flex-direction: column; min-width: 0" slot="how">
		<pre class="language-bash" style="margin: 0 0 1em 0; min-width: 0; min-height: 0">
npx degit <a href="https://github.com/sveltejs/template" style="user-select: initial;">vatro/svelthree-starter</a> my-svelthree-project
<span class="token comment"># or download and extract <a href="https://github.com/vatro/svelthree-starter/master.zip">this .zip file</a></span>
cd my-svelthree-project

npm install
npm run dev
		</pre>

		<!-- <p style="flex: 1">See the <a href="blog/the-easiest-way-to-get-started">quickstart guide</a> for more information.</p> -->

		<!-- <p class="cta"><a rel="prefetch" href="tutorial">Learn Svelte</a></p> -->
	</div>

	<a href="https://svelte.dev/" slot="one">
		<h2>Svelte</h2>
		<p>Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.</p>
		<!-- <p>Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes.</p> -->
		<span class="learn-more">learn more</span>
	</a>

	<a href="https://threejs.org/" slot="two">
		<h2>Three.js</h2>
		<p>Threejs is a cross-browser JavaScript library and application programming interface (API) used to create and display animated 3D computer graphics in a web browser. Threejs uses WebGL.</p>

		<span class="learn-more">learn more</span>
	</a>

	<!--
	<a href="blog/svelte-3-rethinking-reactivity" slot="three">
		<h2>Truly reactive</h2>
		<p>No more complex state management libraries — Svelte brings reactivity to JavaScript itself</p>

		<span class="learn-more">learn more</span>
	</a>
	-->
	
</Blurb>

<!--
<div class="examples">
	<Example id="hello-world">
		<p>Svelte components are built on top of HTML. Just add data.</p>
	</Example>

	<Example id="nested-components">
		<p>CSS is component-scoped by default — no more style collisions or specificity wars. Or you can <a href="/blog/svelte-css-in-js">use your favourite CSS-in-JS library</a>.</p>
	</Example>

	<Example id="reactive-assignments">
		<p>Trigger efficient, granular updates by assigning to local variables. The compiler does the rest.</p>
	</Example>

	<Example id="svg-transitions">
		<p>Build beautiful UIs with a powerful, performant transition engine built right into the framework.</p>
	</Example>
</div>
-->

<!--
<Section>
	<h3>Who's using Svelte?</h3>

	<WhosUsingSvelte/>
</Section>
-->

<!--
<Section>
	<h3>Contributors</h3>

	<p>Svelte is free and open source software, made possible by the work of dozens of volunteers. <a href="https://github.com/sveltejs/svelte">Join us!</a></p>

	<Contributors/>
</Section>
-->
