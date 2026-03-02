import { FormInput } from './FormInput'
import { FormSection } from './FormSection'
import type { HolidayRequestData } from '../types'

interface CompanySectionProps {
    data: HolidayRequestData
    errors: Partial<Record<keyof HolidayRequestData, string>>
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    isValid?: boolean
}

export const CompanySection: React.FC<CompanySectionProps> = ({ data, errors, onChange, isValid }) => {
    return (
        <FormSection title="Company Information" isValid={isValid}>
            <FormInput
                type="text"
                name="companyName"
                value={data.companyName}
                onChange={onChange}
                label="Company Name"
                required
                placeholder="Enter company name"
            />
            <FormInput
                type="text"
                name="companyCVR"
                value={data.companyCVR}
                onChange={onChange}
                label="Company CVR"
                placeholder="8 digits"
                required
                error={errors.companyCVR}
                hint={
                    <>
                        <a href="https://datacvr.virk.dk" target="_blank" rel="noopener noreferrer" className="link link-info">
                            https://datacvr.virk.dk
                        </a>
                    </>
                }
            />
        </FormSection>
    )
}
