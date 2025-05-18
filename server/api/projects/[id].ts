import { getProject } from '~/server/utils/getProject'
import Project from '~/types/project'

export default defineEventHandler(async (event): Promise<Project | { error: string }> => {
  const id = event.context.params?.id
  if (!id) {
    return { error: 'No project ID provided' }
  }

  const project = await getProject(id)
  if (!project) {
    return { error: `Project "${id}" not found` }
  }

  return project
})
