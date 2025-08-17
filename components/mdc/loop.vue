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

	width: 100%;
	height: calc(2 * var(--code-line-height));

	display: flex;
	overflow: hidden;
	position: relative;

	&::after,
	&::before {
		content: '';
		top: 0;
		width: 100px;
		height: 100%;
		position: absolute;

		background-color: var(--color);
		transition: background-color 0.5s cubic-bezier(1, 0, 0, 1);

		mask-image: linear-gradient(to right, black, transparent);
		mask-repeat: no-repeat;
		mask-size: 100% 100%;

		z-index: 2;
	}

	&::after {
		right: 0;
		mask-image: linear-gradient(to left, black, transparent);
	}

	&::before {
		left: 0;
	}

	.slider {
		display: flex;
		overflow: hidden;
		height: 100%;
		flex-shrink: 0;

		&:hover {
			.slide {
				animation-play-state: paused;
			}
		}

		.slide {
			display: flex;
			gap: 50px;
			padding-left: 50px;
			height: 100%;
			flex-shrink: 0;
			animation: 20s slide linear infinite;
		}
	}
}


@keyframes slide {
	0% {
		transform: translateX(0);
	}

	100% {
		transform: translateX(-100%);
	}
}
</style>