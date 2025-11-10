<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
	<footer class="footer-compact" role="contentinfo">
		<div class="container footer-inner">
			<div class="footer-meta">© 2025 Currency Cat</div>
			<nav class="footer-links" aria-label="Footer links">
				<RouterLink to="/about">About</RouterLink>
				<RouterLink to="/docs">Docs</RouterLink>
				<RouterLink to="privacy">Privacy</RouterLink>
			</nav>
		</div>
	</footer>
</template>