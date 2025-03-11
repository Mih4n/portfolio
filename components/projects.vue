<template>
    <Accordion id="projects">
        <AccordionItem>
            <template #trigger>
                <AccordionTrigger 
                    class="bg-blue svg-fg0"
                >
                    <h3>Projects</h3>
                </AccordionTrigger>
            </template>
            <template #content>
                <Accordion>
                    <AccordionItem
                        v-for="(project, index) in projects"
                        :key="project.path"
                    >
                        <template #trigger>
                            <AccordionTrigger
                                class="bg-blue-white svg-bg-0h" 
                                :class="{ 'bg-blue-white-dark': index % 2 === 1 }"
                            >
                                <h3 class="text-bg-0h">{{ project.title }}</h3>
                            </AccordionTrigger>
                        </template>
                        <template #content>
                            <Columns>
                                <template #left>
                                    <Lines>
                                        <ContentRenderer :value="project" />
                                    </Lines>
                                </template>
                                <template #right>
                                </template>
                            </Columns>
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
import { AccordionTrigger } from '#components';
import  Prism  from '~/composables/usePrism';
const { data: projects } = await useAsyncData("projects", () => {
  return queryCollection("projects").all()
})
onMounted(() => {
    Prism.highlightAll();
})
</script>