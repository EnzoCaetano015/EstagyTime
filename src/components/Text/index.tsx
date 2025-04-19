import * as Styled from "./text.styled"
import { MotionProps } from "framer-motion"

export interface TextProps extends MotionProps {
    text?: string
    color?: "purple" | "black" | "grey"
    bold?: boolean
}


export const BigTitle = ({ text, color, ...rest }: TextProps) => {
    return (
        <Styled.BigTitle color={color} {...rest}>
            {text}
        </Styled.BigTitle>
    )
}

export const Title = ({ text, color, ...rest }: TextProps) => {
    return (
        <Styled.Title color={color} {...rest}>
            {text}
        </Styled.Title>
    )
}

export const SmallTitle = ({ text, color, bold, ...rest }: TextProps) => {
    return (
        <Styled.SmallTitle color={color} style={{ fontWeight: !bold ? "none" : "600" }} {...rest}>
            {text}
        </Styled.SmallTitle>
    )
}

export const Subtitle = ({ text, color, bold, ...rest }: TextProps) => {
    return (
        <Styled.SubTitle color={color} style={{ fontWeight: !bold ? "none" : "600" }} {...rest}>
            {text}
        </Styled.SubTitle>
    )
}
