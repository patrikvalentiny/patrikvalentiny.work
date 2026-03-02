export interface HolidayRequestData {
    employeeName: string
    employeeCPR: string
    companyName: string
    companyCVR: string
    fromDate: string
    toDate: string
    workingDays: string
    employeeSignatureDate: string
}

export type FormFieldName = keyof HolidayRequestData
