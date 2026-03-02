import { Document, Page, Text, View } from '@react-pdf/renderer'
import type { HolidayRequestData } from '../types'
import { pdfStyles } from '../utils/pdfStyles'
import { formatDateForPDF } from '../utils/dateUtils'

interface HolidayRequestPDFProps {
    data: HolidayRequestData
}

export const HolidayRequestPDF: React.FC<HolidayRequestPDFProps> = ({ data }) => (
    <Document>
        <Page size="A4" style={pdfStyles.page}>
            {/* Header */}
            <View style={pdfStyles.header}>
                <Text style={pdfStyles.title}>SU Holidays Request</Text>
            </View>

            {/* Employee Information Section */}
            <View style={pdfStyles.section}>
                <Text style={pdfStyles.sectionTitle}>Employee Information</Text>
                <View style={pdfStyles.row}>
                    <View style={pdfStyles.column}>
                        <Text style={pdfStyles.label}>Employee Name</Text>
                        <Text style={pdfStyles.value}>{data.employeeName}</Text>
                    </View>
                    <View style={pdfStyles.column}>
                        <Text style={pdfStyles.label}>Employee ID / CPR Number</Text>
                        <Text style={pdfStyles.value}>{data.employeeCPR}</Text>
                    </View>
                </View>
                <View style={pdfStyles.row}>
                    <View style={pdfStyles.column}>
                        <Text style={pdfStyles.label}>Company Name</Text>
                        <Text style={pdfStyles.value}>{data.companyName}</Text>
                    </View>
                    <View style={pdfStyles.column}>
                        <Text style={pdfStyles.label}>Company Registration / CVR</Text>
                        <Text style={pdfStyles.value}>{data.companyCVR}</Text>
                    </View>
                </View>
            </View>

            {/* Request Details Section */}
            <View style={pdfStyles.section}>
                <Text style={pdfStyles.sectionTitle}>Request Details</Text>
                <View style={pdfStyles.row}>
                    <View style={pdfStyles.column}>
                        <Text style={pdfStyles.label}>Start Date (From)</Text>
                        <Text style={pdfStyles.value}>{formatDateForPDF(data.fromDate)}</Text>
                    </View>
                    <View style={pdfStyles.column}>
                        <Text style={pdfStyles.label}>End Date (To)</Text>
                        <Text style={pdfStyles.value}>{formatDateForPDF(data.toDate)}</Text>
                    </View>
                </View>
                <View style={pdfStyles.row}>
                    <View style={pdfStyles.column}>
                        <Text style={pdfStyles.label}>Total Working Days</Text>
                        <Text style={pdfStyles.value}>{data.workingDays}</Text>
                    </View>
                </View>
            </View>

            {/* Signatures Section */}
            <View style={pdfStyles.section}>
                <Text style={pdfStyles.sectionTitle}>Signatures</Text>

                <View style={pdfStyles.signatureRow}>
                    <View style={pdfStyles.signatureBox}>
                        <View style={pdfStyles.signatureLine} />
                        <Text style={pdfStyles.signatureLabel}>Employee Signature</Text>
                    </View>
                    <View style={pdfStyles.signatureBox}>
                        <View style={pdfStyles.signatureLine} />
                        <Text style={pdfStyles.signatureLabel}>Employer Signature</Text>
                    </View>
                </View>

                <View style={[pdfStyles.row, { marginTop: 20 }]}>
                    <View style={pdfStyles.column}>
                        <Text style={pdfStyles.label}>Date of Signature</Text>
                        <Text style={pdfStyles.value}>{formatDateForPDF(data.employeeSignatureDate)}</Text>
                    </View>
                </View>
            </View>
        </Page>
    </Document>
)
