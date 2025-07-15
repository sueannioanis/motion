import { createMotionComponent, MotionComponentOptions } from "../../../motion"
import { animations } from "../../../motion/features/animations"
import { drag } from "../../../motion/features/drag"
import { gestureAnimations } from "../../../motion/features/gestures"
import { layout } from "../../../motion/features/layout"
import { createDomVisualElement } from "../../dom/create-visual-element"

export function createMotionComponentWithFeatures(
    Component: string,
    options?: MotionComponentOptions
) {
    return createMotionComponent(
        Component,
        options,
        {
            ...animations,
            ...gestureAnimations,
            ...drag,
            ...layout,
        },
        createDomVisualElement
    )
}
