import { PDFDownloadLink } from '@react-pdf/renderer'
import type { HolidayRequestData } from '../types'
import { HolidayRequestPDF } from './HolidayRequestPDF'

interface PDFDownloadButtonProps {
    data: HolidayRequestData
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ data }) => (
    <PDFDownloadLink
        data-umami-event="download_pdf"
        document={<HolidayRequestPDF data={data} />}
        fileName={`Holiday_Request-${data.employeeName.replace(/\s+/g, '_')}.pdf`}
        className="btn btn-primary flex-1 p-3"
    >
        {({ loading }) => (loading ? 'Preparing PDF...' : 'Download PDF')}
    </PDFDownloadLink>
)

export default PDFDownloadButton
