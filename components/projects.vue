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
                    <AccordionItem>
                        <template #trigger>
                            <div class="projects bg-blue-white">
                                <div class="line-title">
                                    <h3 class="text-bg-0h">Projects</h3>
                                </div>
                            </div>
                        </template>
                        <template #content>
                            <Columns>
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
</script>

<style lang="less" scoped>
.projects {
    width: 100%;
    height: 75px;
    display: flex;
}
</style>