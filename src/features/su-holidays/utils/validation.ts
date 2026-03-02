export const validateCPR = (cpr: string): boolean => {
    const cprRegex = /^(\d{6}-\d{4}|\d{10})$/
    return cprRegex.test(cpr)
}

export const validateCVR = (cvr: string): boolean => {
    const cvrRegex = /^\d{8}$/
    return cvrRegex.test(cvr)
}
