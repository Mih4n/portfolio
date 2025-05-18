export default interface Project {
    id: string
    content: {
        left?: {
            content: string
        }
        right?: {
            content: string
        }
    }
    data: {
        [key: string]: any
    }
}
