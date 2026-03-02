import { FormInput } from './FormInput'
import { FormSection } from './FormSection'
import type { HolidayRequestData } from '../types'

interface EmployeeSectionProps {
    data: HolidayRequestData
    errors: Partial<Record<keyof HolidayRequestData, string>>
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    isValid?: boolean
}

export const EmployeeSection: React.FC<EmployeeSectionProps> = ({ data, errors, onChange, isValid }) => {
    return (
        <FormSection title="Employee Information" isValid={isValid}>
            <FormInput
                type="text"
                name="employeeName"
                value={data.employeeName}
                onChange={onChange}
                label="Employee Name"
                required
                placeholder="Enter your full name"
            />
            <FormInput
                type="text"
                name="employeeCPR"
                value={data.employeeCPR}
                onChange={onChange}
                label="Employee CPR Number"
                required
                placeholder="DDMMYY-SSSS or DDMMYYSSSS"
                error={errors.employeeCPR}
            />
        </FormSection>
    )
}
