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

    display: block;
    overflow: auto;

    position: relative;

	&::after,
	&::before {
		top: 0;
		width: 100px;
		height: 100%;
		position: absolute;

		transition: background 0.5s cubic-bezier(1, 0, 0, 1);

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
		overflow: hidden;
		height: 100%;

		flex-shrink: 0;

		.slide {
			display: flex;
			gap: 50px;
			padding-left: 50px;
			height: 100%;
			flex-shrink: 0;

			animation: 3s slide linear infinite;
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