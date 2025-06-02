export interface ResizeInfo {
    width: number
    height: number
}

export type ResizeHandler<I> = (element: I, info: ResizeInfo) => void
