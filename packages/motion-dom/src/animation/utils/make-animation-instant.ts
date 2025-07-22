import { ValueAnimationOptions } from "../types"

export function makeAnimationInstant(
    options: Partial<ValueAnimationOptions>
): void {
    options.duration = 0
    options.type === "keyframes"
}
