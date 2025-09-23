import { animateMini } from "framer-motion/dom"
import { useEffect, useRef } from "react"

export const App = () => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!ref.current) return

        const animation = animateMini(
            ref.current,
            { width: [100, 200], opacity: [0, 1] },
            { duration: 0.1, autoplay: false }
        )

        return () => animation.cancel()
    }, [])

    return <div id="box" ref={ref} style={style} />
}

const style = {
    width: 150, // main thread
    opacity: 0.5, // waapi
    height: 100,
    backgroundColor: "#fff",
}
