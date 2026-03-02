import type { HolidayRequestData } from '../types'
import { EmployeeSection } from './EmployeeSection'
import { CompanySection } from './CompanySection'
import { HolidayDatesSection } from './HolidayDatesSection'
import { SignatureSection } from './SignatureSection'
import PDFDownloadButton from './PDFDownloadButton'

interface HolidayRequestFormProps {
    formData: HolidayRequestData
    errors: Partial<Record<keyof HolidayRequestData, string>>
    onFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    isFormValid: () => boolean
}

const getSectionStatus = (filled: boolean[], hasError: boolean): boolean | undefined => {
    const anyFilled = filled.some(Boolean)
    if (!anyFilled && !hasError) return undefined
    return filled.every(Boolean) && !hasError ? true : false
}

export const HolidayRequestForm: React.FC<HolidayRequestFormProps> = ({
    formData,
    errors,
    onFormChange,
    isFormValid,
}) => {
    const isValid = isFormValid()

    const employeeStatus = getSectionStatus(
        [!!formData.employeeName, !!formData.employeeCPR],
        !!errors.employeeCPR
    )
    const companyStatus = getSectionStatus(
        [!!formData.companyName, !!formData.companyCVR],
        !!errors.companyCVR
    )
    const datesStatus = getSectionStatus(
        [!!formData.fromDate, !!formData.toDate, !!formData.workingDays],
        formData.fromDate && formData.toDate && formData.fromDate > formData.toDate ? true : false
    )
    const signatureStatus = formData.employeeSignatureDate ? true : undefined;

    return (
        <form className="space-y-2 mb-0">
            <EmployeeSection data={formData} errors={errors} onChange={onFormChange} isValid={employeeStatus} />
            <CompanySection data={formData} errors={errors} onChange={onFormChange} isValid={companyStatus} />
            <HolidayDatesSection data={formData} onChange={onFormChange} isValid={datesStatus} />
            <SignatureSection data={formData} onChange={onFormChange} isValid={signatureStatus} />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                {isValid ? (
                    <PDFDownloadButton data={formData} />
                ) : (
                    <button disabled className="flex-1 btn p-3 cursor-not-allowed">
                        Fill All Fields to Generate PDF
                    </button>
                )}
            </div>
        </form>
    )
}
