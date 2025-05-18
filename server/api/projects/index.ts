// server/api/projects/index.ts

import * as fs from 'node:fs/promises'
import * as path from 'node:path'

import { getProject } from '~/server/utils/getProject'
import Project from '~/types/project'

const projectsDir = path.join(process.cwd(), 'public', 'markdown', 'projects')

export default defineEventHandler(async (): Promise<Project[]> => {
  const folders = await fs.readdir(projectsDir, { withFileTypes: true })

  const projects = await Promise.all(
    folders
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => getProject(dirent.name, 'projects'))
  )

  return projects.filter(Boolean) as Project[]
})
