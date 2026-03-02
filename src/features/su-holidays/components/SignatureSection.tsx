import { FormInput } from './FormInput'
import { FormSection } from './FormSection'
import type { HolidayRequestData } from '../types'

interface SignatureSectionProps {
    data: HolidayRequestData
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    isValid?: boolean
}

export const SignatureSection: React.FC<SignatureSectionProps> = ({ data, onChange, isValid }) => {
    return (
        <FormSection title="Signature" isValid={isValid}>
            <FormInput
                type="date"
                name="employeeSignatureDate"
                value={data.employeeSignatureDate}
                onChange={onChange}
                label="Date of Signature"
            />
        </FormSection>
    )
}
