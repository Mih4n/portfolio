// server/utils/getProject.ts

import * as fs from 'node:fs/promises'
import * as path from 'node:path'

import Project from '~/types/project'

const projectsDir = path.join(process.cwd(), 'public', 'markdown')

export async function getProject(projectName: string, folder?: string): Promise<Project | null> {
    let folderPath = path.join(projectsDir, projectName);
    if (folder) 
        folderPath = path.join(projectsDir, folder, projectName)
    const jsonPath = path.join(folderPath, `${projectName}.json`)

    try {
        const jsonRaw = await fs.readFile(jsonPath, 'utf-8')
        const jsonData = JSON.parse(jsonRaw)

        const { content: contentMeta = {}, ...rest } = jsonData

        const content: Project['content'] = {}

        if (contentMeta.left?.path) {
            const leftPath = path.join(folderPath, contentMeta.left.path)
            content.left = {
                content: await fs.readFile(leftPath, 'utf-8')
            }
        }

        if (contentMeta.right?.path) {
            const rightPath = path.join(folderPath, contentMeta.right.path)
            content.right = {
                content: await fs.readFile(rightPath, 'utf-8')
            }
        }

        return {
            id: projectName,
            content,
            data: rest
        }
    } catch (err) {
        console.warn(`Error loading project "${projectName}":`, err)
        return null
    }
}
