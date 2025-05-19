<template>
	<div class="loop">
		<div class="slider">
			<div class="slide">
				<slot></slot>
			</div>
			<div class="slide">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>

</script>

<style lang="less">
.loop {
	--color: var(--bg-0h);

	height: calc(2 * var(--code-line-height));
	overflow: hidden;
	position: relative;

	&::after,
	&::before {
		top: 0;
		width: 100px;
		height: 100%;
		position: absolute;

		z-index: 2;
	}

	&::after {
		content: '';
		right: 0;
		background: linear-gradient(to left, var(--color), transparent);
	}

	&::before {
		content: '';
		left: 0;
		background: linear-gradient(to right, var(--color), transparent);
	}

	.slider {
		display: flex;
		height: inherit;
		width: max-content;
		animation: 20s slide linear infinite;

		.slide {
			gap: 50px;
			padding-left: 50px;
			display: flex;
		}
	}
}

@keyframes slide {
	0% {
		transform: translateX(0);
	}

	100% {
		transform: translateX(-50%);
	}
}
</style>