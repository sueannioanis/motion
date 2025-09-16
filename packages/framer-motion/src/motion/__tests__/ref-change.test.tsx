import * as React from "react"
import { render, fireEvent } from "../../jest.setup"
import { motion } from "../index"

describe("motion component ref changes", () => {
    it("should properly handle ref changes when externalRef changes", () => {
        const TestComponent = () => {
            const ref1 = React.useRef<HTMLDivElement>(null)
            const ref2 = React.useRef<HTMLDivElement>(null)
            const ref3 = React.useRef<HTMLDivElement>(null)
            const ref4 = React.useRef<HTMLDivElement>(null)
            const [currentRef, setCurrentRef] = React.useState(ref1)
            const [motionCurrentRef, setMotionCurrentRef] = React.useState(ref3)

            const handleRefChange = () => {
                setCurrentRef(ref2)
                setMotionCurrentRef(ref4)
            }

            React.useEffect(() => {
                console.log("ref1", ref1.current)
                console.log("ref2", ref2.current)
                console.log("currentRef", currentRef.current)
                console.log("ref3", ref3.current)
                console.log("ref4", ref4.current)
                console.log("motionCurrentRef", motionCurrentRef.current)
            }, [currentRef, motionCurrentRef])

            return (
                <>
                    <div ref={currentRef}>Hii</div>
                    <motion.div ref={motionCurrentRef}>Hello from motion</motion.div>
                    <button onClick={handleRefChange}>Change reference to ref2</button>
                </>
            )
        }

        const { container, getByText } = render(<TestComponent />)
        
        // Initial state
        expect(ref1.current).toBeTruthy()
        expect(ref2.current).toBeNull()
        expect(ref3.current).toBeTruthy()
        expect(ref4.current).toBeNull()

        // Click button to change refs
        fireEvent.click(getByText("Change reference to ref2"))

        // After ref change
        expect(ref1.current).toBeNull()
        expect(ref2.current).toBeTruthy()
        expect(ref3.current).toBeNull() // This should be null after ref change
        expect(ref4.current).toBeTruthy() // This should have the motion div
    })
})
