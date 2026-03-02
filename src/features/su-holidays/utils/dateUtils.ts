export const formatDateForPDF = (dateString: string): string => {
    if (!dateString) return ''
    const date = new Date(dateString)
    if (isNaN(date.getTime())) return dateString
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })
}
