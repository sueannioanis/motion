import * as React from "react"
import { motion, useCycle, MagicMotion } from "@framer"
import styled from "styled-components"

/**
 * This demo is called "Framer border" because it demonstrates border animations as Framer
 * implements borders, by positioning the inner div seperately to the sized outer Frame using `inset`
 */

const Container = styled.div<{ isOn: boolean }>`
    display: block;
    height: 350px;
    width: 350px;
    position: absolute;
    background: white;

    div {
        position: absolute;
        inset: 0px;
        width: 100px;
        height: 100px;

        border: ${({ isOn }) =>
            isOn ? `30px solid #8855FF` : `10px solid #09f`};
    }
`
export const App = () => {
    const [isOn, toggleOn] = useCycle(false, true)

    return (
        <MagicMotion transition={{ duration: 10 }}>
            <Container onClick={() => toggleOn()} isOn={false}>
                <motion.div magic magicId="foo" />
            </Container>
            {isOn && (
                <Container onClick={() => toggleOn()} isOn={true}>
                    <motion.div magic magicId="foo" />
                </Container>
            )}
        </MagicMotion>
    )
}
