import * as fs from 'node:fs/promises'
import * as path from 'node:path'
import matter from 'gray-matter';

const markdownDir = path.join(process.cwd(), "public", "markdown")

export default defineEventHandler(async (event) => {
    try {
        let dir: string = event.path.replace("/api/markdown", "")
        dir = path.join(markdownDir, dir)

        const files: string[] = []

        const items = await fs.readdir(dir, { withFileTypes: true })
        
        for (const item of items) {
            if (!item.isDirectory()) {
                files.push(item.name)
            }
        }

        const markdownFiles = files.map(file => path.join(dir, file))

        const filesContent = await Promise.all(
            markdownFiles.map(async (file) => {
                return matter(await fs.readFile(file, "utf8"))
            })
        )

        return filesContent
    } catch (error) {
        console.error('Error reading markdown files:', error)
        return { error: 'Failed to read markdown files' }
    }
})
