interface ChoiceSpec {
    name: string
    leads_to: string
    [propName: string]: any
    contains_any?: string | string[]
}

interface NodeSpec {
    title?: string
    content: string
    is_start?: boolean
    input?: "pick" | "type"
    choices: ChoiceSpec[]
    [propName: string]: any
}

interface StorySpec {
    [node_id: string]: NodeSpec
}