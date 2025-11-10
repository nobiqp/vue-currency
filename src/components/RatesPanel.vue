<script setup>
import api from '@/api';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref, computed } from 'vue';

import RateTableItem from './RateTableItem.vue';

const top10 = ['USD', 'EUR', 'JPY', 'GBP', 'CNY', 'CHF', 'AUD', 'CAD', 'HKD', 'SGD', 'INR'];
const top25 = ['USD', 'EUR', 'JPY', 'GBP', 'CNY', 'CHF', 'AUD', 'CAD', 'HKD', 'SGD', 'INR', 'KRW', 'SEK', 'MXN', 'NZD', 'NOK', 'TWD', 'BRL', 'ZAR', 'PLN', 'DKK', 'IDR', 'TRY', 'THB', 'ILS', 'HUF'];

const view = ref('Top 10');
const searchTerm = ref('');

const ratesData = ref({
	rates: {},
	base: 'EUR',
	timestamp: null,
});

const date = new Date(ratesData.value.timestamp);

const formattedTime = date.toLocaleString('en-US', {
	month: 'short',   // Nov
	day: 'numeric',   // 7
	year: 'numeric',  // 2025
	hour: '2-digit',
	minute: '2-digit',
	hour12: false
}).replace(',', '');

onMounted(async () => {
	try {
		const response = await api.get(`/latest?base=${ratesData.value.base}`);
		ratesData.value.rates = response.data.rates;
		console.log(response.data);
	} catch (error) {
		console.error('Error getting data' + error);
	}
});

const refreshRates = async () => {
	try {
		const response = await api.get(`/latest?base=${ratesData.value.base}`);
		ratesData.value.rates = response.data.rates;
	} catch (error) {
		console.error('Error refreshing data' + error);
	}
};

const filteredRates = computed(() => {
	const entries = Object.entries(ratesData.value.rates);
	const search = searchTerm.value.trim().toUpperCase();
	refreshRates();
	return Object.fromEntries(
		entries.filter(([code]) => {
			if (view.value === 'Top 10' && !top10.includes(code)) return false;
			if (view.value === 'Top 25' && !top25.includes(code)) return false;
			if (search && !code.toUpperCase().includes(search)) return false;
			return true;
		})
	);
});

onMounted(() => {
	gsap.registerPlugin(ScrollTrigger);

	ScrollTrigger.batch('.table-item', {
		onEnter: (batch) =>
			gsap.from(batch, {
				opacity: 0,
				y: 40,
				duration: 0.6,
				stagger: 0.1,
				ease: 'power2.out',
			}),
		start: 'top 100%',
	});
});

onMounted(() => {
	gsap.registerPlugin(ScrollTrigger);

	const tl = gsap.timeline({ defaults: { duration: 0.6, ease: 'power2.out' } });

	tl.from('.rates-header', { opacity: 0, y: -30 })
		.from('.filter-row', { opacity: 0, y: -20 }, '-=0.3')
		.from('.table-wrapper', { opacity: 0, y: 30 }, '-=0.2');
});

</script>

<template>
	<section class="panel rates">
		<div class="rates-header">
			<h3>🌍 Latest Rates</h3>
			<div class="rates-controls">
				<select v-model="ratesData.base" class="input">
					<option>EUR</option>
					<option>USD</option>
					<option>CAD</option>
				</select>
				<button @click="refreshRates" class="btn small">Refresh</button>
			</div>
		</div>

		<div class="filter-row">
			<input v-model="searchTerm" class="input" type="search" placeholder="Search (e.g. USD, EUR)" />
			<select v-model="view" class="input short">
				<option>Top 10</option>
				<option>Top 25</option>
				<option>All</option>
			</select>
		</div>

		<div class="table-wrapper">
			<table class="rates-table" aria-label="Dummy rates">
				<thead>
					<tr>
						<th>Currency</th>
						<th>Rate (per {{ ratesData.base }})</th>
					</tr>
				</thead>
				<tbody>
					<RateTableItem class="table-item" v-for="(rate, code) in filteredRates" :key="code" :code="code"
						:rate="rate" />
				</tbody>
			</table>
		</div>

		<div class="rates-footer">
			<div>Updated: <time datetime="2025-11-07">{{ formattedTime }}</time></div>
			<div>Base: <strong>{{ ratesData.base }}</strong></div>
		</div>
	</section>
</template>