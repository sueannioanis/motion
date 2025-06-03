import { ResizeHandler } from "./types"

const windowCallbacks = new Set<ResizeHandler<Window>>()

let windowResizeHandler: VoidFunction | undefined

function createWindowResizeHandler() {
    windowResizeHandler = () => {
        const info = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            },
        }

        windowCallbacks.forEach((callback) => callback(window, info))
    }

    window.addEventListener("resize", windowResizeHandler)
}

export function resizeWindow(callback: ResizeHandler<Window>) {
    windowCallbacks.add(callback)

    if (!windowResizeHandler) createWindowResizeHandler()

    return () => {
        windowCallbacks.delete(callback)

        if (
            !windowCallbacks.size &&
            typeof windowResizeHandler === "function"
        ) {
            window.removeEventListener("resize", windowResizeHandler)
            windowResizeHandler = undefined
        }
    }
}
