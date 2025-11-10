<script setup>
import { defineProps } from 'vue';

const props = defineProps({
	code: String,
	rate: Number,
});

</script>

<template>
	<tr>
		<td class="mono">{{ props.code }}</td>
		<td class="num">{{ (props.rate).toFixed(4) }}</td>
	</tr>
</template>