import * as React from "react"
import { render } from "../../jest.setup"
import * as m from "motion/react-m"

describe("motion component ref changes", () => {
    it("should properly handle ref changes when externalRef changes", async () => {
        let ref1: React.RefObject<HTMLDivElement> | undefined
        let ref2: React.RefObject<HTMLDivElement> | undefined

        const TestComponent = () => {
            ref1 = React.useRef<HTMLDivElement>(null)
            ref2 = React.useRef<HTMLDivElement>(null)
            const [currentRef, setCurrentRef] = React.useState(ref1)

            React.useEffect(() => {
                setCurrentRef(ref2!)
            }, [])

            return <m.div ref={currentRef}>Hello</m.div>
        }

        render(<TestComponent />)
        
        // Wait for useEffect to run
        await new Promise(resolve => setTimeout(resolve, 100))
        
        // After ref change, ref1 should be null and ref2 should have the element
        expect(ref1!.current).toBeNull()
        expect(ref2!.current).toBeTruthy()
    })
})