<script setup>
</script>

<template>
	<section class="docs-page">
		<h1>Documentation</h1>
		<p>
			Welcome to the <strong>Currency Cat</strong> documentation. Here you will find information on
			how to use the app, understand exchange rates, and make the most of the currency calculator.
		</p>
		<h2>Features</h2>
		<ul>
			<li>Real-time exchange rates for major and minor currencies.</li>
			<li>Easy-to-use currency converter with instant calculations.</li>
			<li>Accurate and regularly updated data.</li>
			<li>Responsive interface that works on desktop and mobile.</li>
		</ul>
		<h2>How to Use</h2>
		<ol>
			<li>Select the base currency and the target currency.</li>
			<li>Enter the amount you want to convert.</li>
			<li>Click “Convert” to see the result instantly.</li>
		</ol>
		<h2>Contact</h2>
		<p>
			If you encounter issues or have questions, feel free to reach out via our contact page. We are happy to
			assist you.
		</p>
		<p class="updated-year">
			Last updated: {{ new Date().getFullYear() }}
		</p>
	</section>
</template>

<style src="@/assets/docs.css"></style>
