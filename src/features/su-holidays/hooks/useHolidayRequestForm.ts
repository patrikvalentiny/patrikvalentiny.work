import { useState, useCallback } from 'react'
import type { HolidayRequestData } from '../types'
import { validateCPR, validateCVR } from '../utils/validation'
import { useLocalStorage } from './useLocalStorage'

const STORAGE_KEY = 'holiday-request-form'
const INITIAL_STATE: HolidayRequestData = {
    employeeName: '', employeeCPR: '', companyName: '', companyCVR: '',
    fromDate: '', toDate: '', workingDays: '', employeeSignatureDate: '',
}

export const useHolidayRequestForm = () => {
    const [formData, setFormData] = useLocalStorage<HolidayRequestData>(STORAGE_KEY, INITIAL_STATE)
    const [errors, setErrors] = useState<Partial<Record<keyof HolidayRequestData, string>>>({})

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (errors[name as keyof HolidayRequestData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }))
        }
        if (name === 'employeeCPR') {
            setErrors((prev) => ({ ...prev, employeeCPR: value && !validateCPR(value) ? 'Invalid CPR format (DDMMYY-SSSS or DDMMYYSSSS)' : undefined }))
        }
        if (name === 'companyCVR') {
            setErrors((prev) => ({ ...prev, companyCVR: value && !validateCVR(value) ? 'Invalid CVR format (8 digits)' : undefined }))
        }
    }, [errors, setFormData])

    const isFormValid = useCallback((): boolean => {
        return !!(
            formData.employeeName && formData.employeeCPR &&
            formData.fromDate && formData.toDate && formData.workingDays &&
            validateCPR(formData.employeeCPR) && validateCVR(formData.companyCVR) &&
            (!formData.fromDate || !formData.toDate || formData.fromDate <= formData.toDate) &&
            formData.companyName
        )
    }, [formData])

    return { formData, errors, handleChange, isFormValid }
}
