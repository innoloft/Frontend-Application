import { toast } from "react-toastify"

export const DeepCopyObj = (obj: object) => JSON.parse(JSON.stringify(obj))


export const ErrorNotification = (message: string) => {
    toast.error(message)
}
export const WarningNotification = (message: string) => {
    toast.warn(message)
}
export const SuccessNotification = (message: string) => {
    toast.success(message)
}


const HasNumber = (value: string) => {
    return new RegExp(/[0-9]/).test(value)
}

const HasMixed = (value: string) => {
    return new RegExp(/[a-z]/).test(value) &&
        new RegExp(/[A-Z]/).test(value)
}

const HasSpecial = (value: string) => {
    return new RegExp(/[!#@$%^&*)(+=._-]/).test(value)
}
export const StrengthIndicator = (value: string): number => {
    let strengths = 0

    if (value.length > 5)
        strengths++

    if (value.length > 7)
        strengths++

    if (HasNumber(value))
        strengths++

    if (HasSpecial(value))
        strengths++

    if (HasMixed(value))
        strengths++

    return strengths
}

export const StrengthText = (count: number): string => {
    if (count < 3)
        return 'weak'
    if (count < 5)
        return 'medium'
    if (count < 8)
        return 'strong'
    else return ''
}