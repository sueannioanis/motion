import * as React from "react"
import { useState } from "react"
import { motion, MotionContext, MagicMotion } from "@framer"
import { useRef } from "react"
import { useLayoutEffect } from "react"

/**
 * This example replicates the centering technique of Framer which applies a `transformTemplate` prop
 * that adds `transform(-50% -50%)`
 */

const zeroDelta = {
    translate: 0,
    scale: 1,
    origin: 1,
    originPoint: 0,
}

export const App = () => {
    const [isOn, setIsOn] = useState(true)
    const [scale, setScale] = useState(0.5)
    const ref = useRef(null)
    const [deltas, setDeltas] = useState({ x: zeroDelta, y: zeroDelta })

    // If a delta provided to MotionContext does not have a scale of 1,
    // that scale is inversely applied to magic motion divs,
    // causing them to be larger or smaller than they should be after the parent scale.

    // useLayoutEffect(() => {
    //     const rect = ref.current?.getBoundingClientRect()

    //     setDeltas({
    //         x: {
    //             ...zeroDelta,
    //             scale: 1 / scale,
    //             originPoint: rect?.left,
    //         },
    //         y: {
    //             ...zeroDelta,
    //             scale: 1 / scale,
    //             originPoint: rect?.top,
    //         },
    //     })
    // }, [scale])

    return (
        <div>
            <input
                type="range"
                min="0.1"
                max="1"
                step="0.1"
                value={scale}
                onChange={e => setScale(e.target.value)}
            />
            <div
                ref={ref}
                style={{
                    transform: `scale(${scale})`,
                    width: 1000,
                    height: 1000,
                    backgroundColor: "white",
                    overflow: "hidden",
                }}
                onClick={() => setIsOn(!isOn)}
            >
                <MotionContext.Provider value={{ deltas: [deltas], depth: 0 }}>
                    {/* Commenting in wrapping motion div's that aren't tagged as magic prevents deltas affecting the magic divs. */}
                    {/* <motion.div> */}
                    <MagicMotion>
                        {isOn ? (
                            <motion.div
                                magic
                                magicId="a"
                                transition={{ duration: 1 }}
                                style={{
                                    width: 100,
                                    height: 100,
                                    backgroundColor: "red",
                                    marginTop: 100,
                                    marginLeft: 200,
                                }}
                            />
                        ) : (
                            <motion.div
                                magic
                                magicId="a"
                                transition={{ duration: 1 }}
                                style={{
                                    width: 100,
                                    height: 100,
                                    backgroundColor: "blue",
                                    marginTop: 800,
                                    marginLeft: 200,
                                }}
                            />
                        )}
                    </MagicMotion>
                    {/* </motion.div> */}
                </MotionContext.Provider>
            </div>
        </div>
    )
}
