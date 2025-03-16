<template>
	<button class="burger" @click="toggle" :class="{ 'active': model }">
		<div class="line" />
		<div class="line" />
		<div class="line" />
		<div class="line" />
	</button>
</template>

<script lang="ts" setup>
const model = defineModel({ type: Boolean, default: false })
function toggle() {
	model.value = !model.value
	console.log(model.value)
}
</script>

<style lang="less">
.burger {
	width: 33px;
	height: 33px;
	--burger-line-hight: 3.5px;

	margin: auto 0 auto 20px;

	display: flex;
	position: relative;
	flex-direction: column;

	.line {
		width: 100%;
		height: var(--burger-line-hight);

		position: absolute;
		border-radius: var(--burger-line-hight);

		background-color: var(--fg0);

		transform: translate(0, 0);
		transition: all 0.5s cubic-bezier(1, 0, 0, 1);
	}

	& .line:nth-child(1) {
		top: calc(1.5 * var(--burger-line-hight));
		left: 50%;
		transform: translate(-50%, 0);
	}

	& .line:nth-child(2),
	& .line:nth-child(3) {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	& .line:nth-child(4) {
		top: calc(100% - 2.5 * var(--burger-line-hight));
		left: 50%;
		transform: translate(-50%, 0);
	}

	&.active .line:nth-child(1),
	&.active .line:nth-child(4) {
		width: 0;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	&.active .line:nth-child(2) {
		transform: translate(-50%, -50%) rotate(45deg);
	}

	&.active .line:nth-child(3) {
		transform: translate(-50%, -50%) rotate(-45deg);
	}
}
</style>