import { useEffect, useState } from "react"

export function usePageInView() {
    const [isInView, setIsInView] = useState(true)

    useEffect(() => {
        if (document.hidden) setIsInView(false)

        const handleVisibilityChange = () => setIsInView(!document.hidden)

        document.addEventListener("visibilitychange", handleVisibilityChange)

        return () => {
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange
            )
        }
    }, [])

    return isInView
}
