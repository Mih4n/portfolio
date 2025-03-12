import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
    collections: {
        about: defineCollection({
            type: 'page',
            source: 'about/*.md',
            schema: z.object({
                date: z.string()
            })
        }),
        projects: defineCollection({
            type: 'page',
            source: 'projects/*.md',
            schema: z.object({
                date: z.string()
            })
        })
    }
})