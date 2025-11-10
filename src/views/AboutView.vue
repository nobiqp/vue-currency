<script setup>
</script>

<template>
	<section class="about-page">
		<h1>About This Project</h1>
		<p>
			Welcome to our <strong>Currency Cat</strong> website — a modern tool designed to help you stay
			up to date with global exchange rates and easily convert currencies in real time.
		</p>
		<p>
			Our platform provides accurate, regularly updated data for major and minor currencies from around the world.
			Whether you're a traveler, trader, or simply curious about exchange rates, this app helps you find the
			information you need quickly and efficiently.
		</p>
		<p>
			The built-in calculator allows you to convert between currencies instantly. Just enter the amount and select
			the currencies — no manual math or outdated rates needed.
		</p>
		<p>
			We prioritize a clean interface and reliable data, making this tool perfect for everyday use. Stay informed
			and make smarter financial decisions with ease.
		</p>
		<p class="updated-year">
			Last updated: {{ new Date().getFullYear() }}
		</p>
	</section>
</template>

<style src="@/assets/about.css"></style>
