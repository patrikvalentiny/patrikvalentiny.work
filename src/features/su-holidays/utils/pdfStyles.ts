import { StyleSheet } from '@react-pdf/renderer'

const accentColor = '#475569'
const textLight = '#64748b'

export const pdfStyles = StyleSheet.create({
    page: { padding: 50, fontSize: 10, fontFamily: 'Helvetica', color: '#1e293b', lineHeight: 1.5 },
    header: { marginBottom: 40, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    title: { fontSize: 24, fontFamily: 'Helvetica-Bold', letterSpacing: -0.5, color: '#0f172a' },
    section: { marginBottom: 30 },
    sectionTitle: { fontSize: 11, fontFamily: 'Helvetica-Bold', color: accentColor, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#e2e8f0', paddingBottom: 5 },
    row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
    column: { flexDirection: 'column', width: '48%' },
    label: { fontSize: 8, fontFamily: 'Helvetica-Bold', color: textLight, marginBottom: 4, textTransform: 'uppercase' },
    value: { fontSize: 11, fontFamily: 'Helvetica', borderBottomWidth: 1, borderBottomColor: '#cbd5e1', paddingBottom: 4, minHeight: 18 },
    signatureRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
    signatureBox: { width: '45%' },
    signatureLine: { borderTopWidth: 1, borderTopColor: '#cbd5e1', marginTop: 40 },
    signatureLabel: { fontSize: 8, fontFamily: 'Helvetica-Bold', color: textLight, marginTop: 8 },
})
