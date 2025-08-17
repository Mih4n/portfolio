<template>
    <Columns>
        <template #left v-if="code">
            <Lines>
                <MDC 
                    :value="code" 
                    :tag="false"
                />
            </Lines>
        </template>
        <template #right v-if="addition">
            <MDC 
                :value="addition" 
                :tag="false"
            />
        </template>
    </Columns>
</template>

<script lang="ts" setup>
defineProps<{
  code?: string | null;
  addition?: string | null;
}>();
</script>