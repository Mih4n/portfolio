<template>
	<header class="bg-blue-white">
		<main class="bg-blue">
			<div class="content">
				<h3 class="logo incontsolate" href="#">Mih4n</h3>
				<div id="links">
					<Links />
				</div>
			</div>
			<ModeSwitch class="mode" />
			<Burger v-model="opened" />
		</main>
		<div 
			id="mobile-links"
			ref="mobileLinks" 
			class="bg-blue-white"
			:class="{'opened': opened}"
		>
			<div class="content">
				<Links />
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import Burger from './burger.vue';
import Links from './links.vue';
const opened = ref<boolean>()
const mobileLinks = ref<HTMLElement>()
const { pressed } = useMousePressed({ target: mobileLinks })
watch(pressed, () => opened.value = false)
</script>

<style lang="less">
@import "/assets/css/mobile.less";

html {
	--header-height: 100px;
	scroll-padding-top: var(--header-height);
}

header {
	height: var(--header-height);
	transition: all 0.5s cubic-bezier(1, 0, 0, 1);
	width: 100vw;

	top: 0;
	left: 0;
	position: sticky;

	z-index: 1000;

	display: flex;
	flex-direction: column;

	filter: drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.1));

	main {
		height: 100%;
		width: 100%;

		padding: 0 var(--title-pudding) 0 var(--title-pudding);
		margin-bottom: 20px;

		display: flex;
		position: relative;

		.content {
			width: 100%;
			display: flex;
			margin: auto 0;
		}

		.logo {
			margin: auto auto auto 0;

			font-style: normal;
			font-weight: 900;
			font-size: 41px;

			font-weight: 900;
		}

		#links {
			display: flex;
			gap: 140px;

			#mobile.all({
				display: none;
			});

			a {
				margin: auto 0;
				padding: 10px;
				position: relative;

				h3 {
					margin: 0;
					font-weight: 500;
					font-size: 17px;
					transition: all 0.5s cubic-bezier(1, 0, 0, 1);
				}
			}
		}

		.mode {
			right: -140px;
			position: absolute;

			#mobile.all({
				right: 0;
				position: static;
			});

			path {
				fill: var(--fg0);
			}
		}

		.burger {
			display: none;
		}

		#mobile.all({
			.burger {
				display: flex;
			}
		})
	}

	#mobile-links {
		display: none;
		#mobile.all({
			display: grid;
		});

		width: 100vw;
		height: fit-content;

		overflow: hidden;

		top: calc(var(--header-height) - 20px);
		position: absolute;
		align-items: flex-start;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.5s ease-in-out;

		&.opened {
			grid-template-rows: 1fr;
		}

		.content {
			overflow: hidden;

			display: flex;
			flex-direction: column;

			.h-underline-a {
				padding-bottom: 5px;
				margin: 5px 0 0 auto;
			}
			
			padding-right: var(--title-pudding);
			padding-bottom: 5px;
			
			height: fit-content;
		}
	}
}
</style>