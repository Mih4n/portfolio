<template>
	<Accordion id="projects">
		<AccordionItem>
			<template #trigger>
				<AccordionTrigger class="bg-blue svg-fg0">
					<h3>Projects</h3>
				</AccordionTrigger>
			</template>
			<template #content>
				<Accordion>
					<AccordionItem v-for="(project, index) in projects" :key="`${index}-projects`">
						<template #trigger>
							<AccordionTrigger class="bg-blue-white arrow-bg-0h" :class="{ 'bg-aqua': index % 2 === 1 }">
								<h3 class="text-bg-0h">{{ project.data.title }}</h3>
							</AccordionTrigger>
						</template>
						<template #content>
							<Code 
								:code="project.content.left?.content"
								:addition="project.content.right?.content"
							/>
						</template>
					</AccordionItem>
				</Accordion>
			</template>
			<template #footer>
				<div class="a-trigger bg-blue"></div>
			</template>
		</AccordionItem>
	</Accordion>
</template>

<script setup lang="ts">
import type Project from '../types/project';

const projects = ref<Project[]>([])
useFetch<Project[]>("/api/projects")
	.then(response => projects.value = response.data.value ?? [])
</script>

<style lang="less">
.arrow-bg-0h {
	.arrow {
		.line {
			background-color: var(--bg-0h);
		}
	}
}
</style>