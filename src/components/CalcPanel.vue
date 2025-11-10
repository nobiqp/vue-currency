<script setup>
import api from '@/api';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from 'vue';

const defaultData = ref({
	amount: 100,
	from: 'EUR',
	to: 'USD',
	rate: 0,
});

const calcData = ref({
	amount: 100,
	from: 'EUR',
	to: 'USD',
	rate: null,
});

onMounted(async () => {
	try {
		const response = await api.get(`/convert?from=EUR&to=USD`);
		defaultData.value.rate = response.data.info.rate;
	} catch (error) {
		console.error('Error getting data' + error);
	}
});

const handleNewCalc = async () => {
	try {
		const response = await api.get(`/convert?from=${calcData.value.from}&to=${calcData.value.to}`);
		defaultData.value.rate = response.data.info.rate;
		defaultData.value.from = calcData.value.from;
		defaultData.value.to = calcData.value.to;
	} catch (error) {
		console.error('Error getting data' + error);
	}
};

onMounted(() => {
	gsap.registerPlugin(ScrollTrigger);

	const tl = gsap.timeline({ defaults: { duration: 0.6, ease: 'power2.out' } });

	tl.from('.calc-header', { opacity: 0, y: -30 })
		.from('.form-calc', { opacity: 0, y: -20 }, '-=0.3')
});

</script>

<template>
	<section class="panel calc">
		<h3 class="calc-header">🔢 Exchange Calculator</h3>

		<form class="form-calc" onsubmit="return false;">
			<label>Amount
				<input v-model="calcData.amount" class="input amount" type="number" />
			</label>

			<div class="form-row split">
				<label>From
					<select v-model="calcData.from" class="input">
						<option>EUR</option>
						<option>USD</option>
						<option>CAD</option>
					</select>
				</label>

				<label>To
					<select v-model="calcData.to" class="input">
						<option>USD</option>
						<option>EUR</option>
						<option>CAD</option>
					</select>
				</label>
			</div>

			<button @click="handleNewCalc" class="btn wide">Convert</button>

			<div class="result-box">
				<div class="result-value">100 {{ defaultData.from }} → {{ (defaultData.amount *
					defaultData.rate).toFixed(2) }}
					{{ defaultData.to
					}}</div>
				<div class="result-rate">Rate: {{ (defaultData.rate).toFixed(4) }}</div>
			</div>
		</form>
	</section>
</template>