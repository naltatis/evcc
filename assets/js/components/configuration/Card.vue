<template>
	<div class="mb-4 my-4">
		<slot name="content"></slot>
	</div>
</template>

<script>
export default {
	name: "Card",
	props: {
		title: String,
	},
};
</script>

<style scoped>
.card-header-with-link {
	display: flex;
	justify-content: space-between;
	align-items: baseline;
}
</style>
