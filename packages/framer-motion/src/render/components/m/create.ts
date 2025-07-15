import { createMotionComponent, MotionComponentOptions } from "../../../motion"

export function createMinimalMotionComponent(
    Component: string,
    options?: MotionComponentOptions
) {
    return createMotionComponent(Component, options)
}
