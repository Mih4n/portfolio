<template>
    <Accordion id="projects">
        <AccordionItem>
            <template #trigger>
                <div class="projects bg-blue">
                    <div class="line-title">
                        <h3>Projects</h3>
                    </div>
                </div>
            </template>
            <template #content>
                <Accordion>
                    <AccordionItem
                        v-for="(project, index) in projects"
                        :key="project.path"
                    >
                        <template #trigger>
                            <div class="projects bg-blue-white" :class="{ 'bg-blue-white-dark': index % 2 === 1 }">
                                <div class="line-title">
                                    <h3 class="text-bg-0h">{{ project.title }}</h3>
                                </div>
                            </div>
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
                <div class="projects bg-blue"></div>
            </template>
        </AccordionItem>
    </Accordion>
</template>

<script setup lang="ts">
import  Prism  from '~/composables/usePrism';
const { data: projects } = await useAsyncData("projects", () => {
  return queryCollection("projects").all()
})
onMounted(() => {
    Prism.highlightAll();
})
</script>

<style lang="less" scoped>
.projects {
    width: 100%;
    height: 75px;
    display: flex;
}
.bg-blue-white-dark {
    background-color: antiquewhite;
}
</style>