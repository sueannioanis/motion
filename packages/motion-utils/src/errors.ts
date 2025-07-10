export type DevMessage = (
    check: boolean,
    message: string,
    errorCode?: string
) => void

let warning: DevMessage = () => {}
let invariant: DevMessage = () => {}

if (process.env.NODE_ENV !== "production") {
    const formatMessage = (message: string, errorCode?: string) => {
        return errorCode
            ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}`
            : message
    }

    warning = (check, message, errorCode) => {
        if (!check && typeof console !== "undefined") {
            console.warn(formatMessage(message, errorCode))
        }
    }

    invariant = (check, message, errorCode) => {
        if (!check) {
            throw new Error(formatMessage(message, errorCode))
        }
    }
}

export { invariant, warning }
