<script setup>
import { RouterLink } from 'vue-router';
import logo from '@/assets/img/cat-logo.png'
</script>

<template>
	<header class="topbar-compact" role="banner">
		<div class="container topbar-inner">
			<div class="brand-compact" aria-label="Currency Portal">
				<RouterLink class="header-links" to="/">
					<img class="brand-badge" :src="logo" alt="logo" />
				</RouterLink>
				<div>
					<div class="brand-title">Currency Cat</div>
					<div class="brand-sub">Rates · Exchange · Tiny dashboard</div>
				</div>
			</div>
		</div>
	</header>
</template>