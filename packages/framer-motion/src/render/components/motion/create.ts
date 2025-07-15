import { createMotionComponent, MotionComponentOptions } from "../../../motion"
import { createDomVisualElement } from "../../dom/create-visual-element"
import { featureBundle } from "./feature-bundle"

export function createMotionComponentWithFeatures(
    Component: string,
    options?: MotionComponentOptions
) {
    return createMotionComponent(
        Component,
        options,
        featureBundle,
        createDomVisualElement
    )
}
