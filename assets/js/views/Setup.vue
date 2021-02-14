<template>
	<div class="container">
		<div class="row mt-4 border-bottom">
			<div class="col-12"><h1>Konfiguration</h1></div>
		</div>
		<div class="row mt-4">
			<div class="col-md-5 col-lg-4">
				<Navigation />
			</div>
			<div class="col-md-7 offset-lg-1 col-lg-7 py-3">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
import Navigation from "../components/configuration/Navigation";

export default {
	name: "Setup",
	components: { Navigation },
};
</script>

<style scoped></style>
