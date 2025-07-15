import * as React from "react"
import { CreateVisualElement } from "../../render/types"
import { MotionProps } from "../types"
import { VisualState } from "../utils/use-visual-state"
import type { Feature } from "./Feature"
import { MeasureLayout } from "./layout/MeasureLayout"

interface FeatureClass<Props = unknown> {
    new (props: Props): Feature<Props>
}

export interface HydratedFeatureDefinition {
    isEnabled: (props: MotionProps) => boolean
    Feature: FeatureClass<unknown>
    ProjectionNode?: any
    MeasureLayout?: typeof MeasureLayout
}

export interface HydratedFeatureDefinitions {
    animation?: HydratedFeatureDefinition
    exit?: HydratedFeatureDefinition
    drag?: HydratedFeatureDefinition
    tap?: HydratedFeatureDefinition
    focus?: HydratedFeatureDefinition
    hover?: HydratedFeatureDefinition
    pan?: HydratedFeatureDefinition
    inView?: HydratedFeatureDefinition
    layout?: HydratedFeatureDefinition
}

export interface FeatureDefinition {
    isEnabled: HydratedFeatureDefinition["isEnabled"]
    Feature?: HydratedFeatureDefinition["Feature"]
    ProjectionNode?: HydratedFeatureDefinition["ProjectionNode"]
    MeasureLayout?: HydratedFeatureDefinition["MeasureLayout"]
}

export type FeatureDefinitions = {
    [K in keyof HydratedFeatureDefinitions]: FeatureDefinition
}

export interface FeaturePackage {
    Feature?: HydratedFeatureDefinition["Feature"]
    ProjectionNode?: HydratedFeatureDefinition["ProjectionNode"]
    MeasureLayout?: HydratedFeatureDefinition["MeasureLayout"]
}

export type FeaturePackages = {
    [K in keyof HydratedFeatureDefinitions]: FeaturePackage
}

export interface FeatureBundle extends FeaturePackages {
    renderer: CreateVisualElement<any>
}

export type LazyFeatureBundle = () => Promise<FeatureBundle>

export type RenderComponent<Instance, RenderState> = (
    Component: string | React.ComponentType<React.PropsWithChildren<unknown>>,
    props: MotionProps,
    ref: React.Ref<Instance>,
    visualState: VisualState<Instance, RenderState>,
    isStatic: boolean,
    forwardMotionProps?: boolean
) => any
