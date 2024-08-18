export interface AppState {
    posts: Post[];
}

export interface Post {
    id: number,
    title: string,
    body: string
}

export const selectPosts = (state: AppState): Post[] => state.blog