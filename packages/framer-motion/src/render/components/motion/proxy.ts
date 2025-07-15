import { animations } from "../../../motion/features/animations"
import { drag } from "../../../motion/features/drag"
import { gestureAnimations } from "../../../motion/features/gestures"
import { layout } from "../../../motion/features/layout"
import { createDomVisualElement } from "../../dom/create-visual-element"
import { createMotionProxy } from "../create-proxy"

export const motion = /*@__PURE__*/ createMotionProxy(
    {
        ...animations,
        ...gestureAnimations,
        ...drag,
        ...layout,
    },
    createDomVisualElement
)
